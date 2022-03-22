var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Users";

var email = "test@email.com";
var username = "username";
var password = "pwd";
var joinDate = (new Date().toLocaleDateString());
var profilePic = "https://site.com/image";
var status = "crying";

var params = {
    TableName:table,
    Item:{
        "email": email,
        "username": username,
        "password": password,
        "joinDate": joinDate,
        "profilePic": profilePic
        
    }
};

var paramsUpdate = {
    TableName:table,
    Key:{
        "email": email
    },
    UpdateExpression: "set #st = :status, profilePic=:profilePic, top=:top, fav=:fav, currWatching=:currWatching",
    ExpressionAttributeNames:{
        "#st": "status"
    },
    ExpressionAttributeValues:{
        ":status": status,
        ":profilePic": profilePic,
        ":top": ["anime1","anime2"],
        ":fav": ["bestAnime"],
        ":currWatching": ["anime1", "anime2"]
        
    },
    ReturnValues:"UPDATED_NEW"
};

function createUser() {
    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    }); 
}

function updateAttr() {
    console.log("Updating the item...");
    docClient.update(paramsUpdate, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

function deleteUser(){

}

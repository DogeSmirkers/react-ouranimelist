var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Users";

var email = "test@email.com";
var status = "crying";
var profilePic = "https://site.com/image";

var params = {
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

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});
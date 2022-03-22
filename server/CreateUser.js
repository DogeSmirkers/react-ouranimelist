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

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
}); 
import AWS from 'aws-sdk'

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

/*
var table = "Users";

var email = "test@email.com";
var username = "username";
var password = "pwd";
var joinDate = (new Date().toLocaleDateString());
var profilePic = "https://site.com/image";
*/
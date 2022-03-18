let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
var AWS = require("aws-sdk");

// Express Route
const userRoute = require('../server/routes/user.route')

// Connecting to dynamodb
AWS.config.update({
  region: "us-east-1",
  endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/user', userRoute)

// PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
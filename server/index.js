// comment out aws stuff for now
// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-east-1",
//   endpoint: "http://localhost:8000"
// });

const express = require('express');
const path = require('path');
const axios = require('axios');
const {client_id} = require('./config');
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`OurAnimeList is listening at http://localhost:${port}`);
})
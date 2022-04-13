// comment out aws stuff for now
// var AWS = require("aws-sdk");

// AWS.config.update({
//   region: "us-east-1",
//   endpoint: "http://localhost:8000"
// });

const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

//app.use(express.static('../client/public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const search = require('./Search')
// search by title
app.get('/search', (req, res) => {
    const query = req.query
    res.send(search.Search(query))
})

const getDetails = require('./GetDetails')
// get anime details 
app.get('/anime/:id', (req, res) => {
    const id = req.query.id
    res.send(getDetails.GetDetails(id))
})

const getSeasonal = require('./GetSeasonal')
// get by season
app.get('/season', (req, res) => {
    res.send(getSeasonal.GetSeasonal())
})

const getRanking = require('./GetRanking')
// get anime ranking
app.get('/ranking', (req, res) => {
    res.send(getRanking.GetRanking())
})

app.listen(PORT, () => {
    console.log(`OurAnimeList is listening at http://localhost:${PORT}`);
})
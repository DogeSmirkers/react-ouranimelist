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

app.listen(PORT, () => {
  console.log(`OurAnimeList is listening at http://localhost:${PORT}`);
})

const search = require('./Search')
// search by title
app.get('/search', (req, res) => {
    const query = req.query
    res.send(search.Search(query))
})

const details = require('./Details')
// get anime details 
app.get('/anime/:id', (req, res) => {
    const id = req.query.id
    res.send(details.Details(id))
})

// return all anime from specific season
// @params: year, season, offset, limit, sort, fields
// const test = anime.animeSeasonal(2021, "summer", 0, 5, "anime_score");
// test.then(result => {
//     // still can't unpack nested objects (main_picture) and arrays (genres & studios)
//     let obj = result.data;
//     let res = [];
//     for (let i in obj) {
//         res.push([i, obj[i]]);
//     }
//     for(let i=0; i< res.length; i++) {
//         //console.log(res[i]);
//     }
// }).catch(console.log)

//return anime by rank
//@params: rankingType, offset, limit, fields
// const test = anime.animeRanking("all", 0, 50);
// test.then(result => {
//     // still can't unpack nested objects (main_picture) and arrays (genres & studios)
//     let obj = result.data;
//     let res = [];
//     for (let i in obj) {
//         res.push([i, obj[i]]);
//     }
//     for(let i=0; i< res.length; i++) {
//         console.log(res[i]);
//     }
// }).catch(console.log)
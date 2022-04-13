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
const query = "odd taxi"
app.get('/random-anime', (req, res) => {
    res.send('Random')
    search.Search(query)
})

// get full details of specific anime by id
//const id = "21"
// as of Apr 12, 2022: the highest id for anime is 50713
const id = String(Math.floor(Math.random()*50713)+1)
//console.log(id)
//@params: id, fields
// const random = anime.anime(44024);
// random.then(result => {

//     // set each data field to var
//     if (typeof result.title != "undefined") {let title = result.title}
//     if (typeof result.main_picture_medium != "undefined") {let main_pic_med = result.main_picture.medium}
//     if (typeof result.main_picture.large != "undefined") {let main_pic_large = result.main_picture.large}
//     if (typeof result.start_date != "undefined") {let start_date = result.start_date}
//     if (typeof result.end_date != "undefined") {let end_date = result.end_date}
//     if (typeof result.synopsis != "undefined") {let synopsis = result.synopsis}
//     if (typeof result.status != "undefined") {let currStatus = result.status}
//     if (typeof result.num_episodes != "undefined") {let num_ep = result.num_episodes}
//     if (typeof result.genres != "undefined") {let genresObj = result.genres}
//     if (typeof result.studios != "undefined") {let studiosObj = result.studios}
//     if (typeof result.pictures != "undefined") {let picObj = result.pictures}
//     if (typeof result.mean != "undefined") {let score = result.mean}
//     console.log(result)
    
//     // convert some data to more readable formats 
//     if (typeof start_date === "undefined") {convertDate(start_date)} 
//     if (typeof end_date === "undefined") {end_date = convertDate(end_date)}
//     if (typeof currStatus === "undefined") {currStatus = convertStatus(currStatus)}
//     synopsis = synopsis.split('[')[0];
//     let genres = convertObj(genresObj);
//     let studios = convertObj(studiosObj);

//     // loop through json response
//     let obj = result;
//     let res = [];
//     for(let i in obj) {
//         res.push([i, obj[i]]);
//     }
//     for(let i=0; i< res.length; i++) {
//         //console.log(res[i]);
//     }
// }).catch(console.log)

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
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
const PORT = process.env.PORT || 4000;

//app.use(express.static('../client/public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`OurAnimeList is listening at http://localhost:${PORT}`);
})

const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
//const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");

// convert date to better format: yyyy-mm-dd to M dd yyyy
function convertDate(date) {
    date = new Date(date);
    date = date.toDateString();
    date = date.substring(3,16);
    return date;
}

// convert status to more readable format
function convertStatus (currStatus) {
    currStatus = currStatus.charAt(0).toUpperCase() + currStatus.slice(1);
    currStatus = currStatus.replace("_"," ");
    return currStatus;
}

// obj --> string of what was in obj
// ex: genresObj --> list of genres
function convertObj(obj) {
    let list = "";
    for(let i=0; i< Object.keys(obj).length; i++) {
        if (i === 0 && i !== Object.keys(obj).length - 1) {
            list = obj[i].name + ", ";
        }
        else if (i !== Object.keys(obj).length - 1) {
            list += obj[i].name + ", ";
        }
        else {
            list += obj[i].name;
        }
    }
    list = list.trim();
    return list;
}

// search by title
const query = "odd taxi"
// const main = anime.animes(query,0,1);
// main.then(result => {

//     // relevant api data for each anime
//     if (typeof result.data[0].node != "undefined") {let data = result.data[0].node}
//     if (typeof result.data[0].node.title != "undefined") {let title = result.data[0].node.title}
//     if (typeof result.data[0].node.main_picture.medium != "undefined") {let main_pic_med = result.data[0].node.main_picture.medium}
//     if (typeof result.data[0].node.main_picture.large != "undefined") {let main_pic_large = result.data[0].node.main_picture.large}
//     if (typeof result.data[0].node.start_date != "undefined") {let start_date = result.data[0].node.start_date}
//     if (typeof result.data[0].node.end_date != "undefined") {let end_date = result.data[0].node.end_date}
//     if (typeof result.data[0].node.synopsis != "undefined") {let synopsis = result.data[0].node.synopsis}
//     if (typeof result.data[0].node.status != "undefined") {let currStatus = result.data[0].node.status}
//     if (typeof result.data[0].node.num_episodes != "undefined") {let num_ep = result.data[0].node.num_episodes}
//     if (typeof result.data[0].node.genres != "undefined") {let genresObj = result.data[0].node.genres}
//     if (typeof result.data[0].node.mean != "undefined") {let score = result.data[0].node.mean}
//     if (typeof result.data[0].node.rank != "undefined") {let rank = result.data[0].node.rank}
//     if (typeof result.data[0].node.studios != "undefined") {let studiosObj = result.data[0].node.studios}
//     if (typeof result.data[0].node.id != "undefined") {let id = result.data[0].node.id}
//     //console.log(data);

//     // convert some data to more readable formats 
//     start_date = convertDate(start_date);
//     end_date = convertDate(end_date);
//     currStatus = convertStatus(currStatus);
//     synopsis = synopsis.split('[')[0];
//     let genres = convertObj(genresObj);
//     let studios = convertObj(studiosObj);
//     rank = "#" + rank;

//     // loop through json response
//     let obj = result.data[0].node;
//     let res = [];
//     for(let i in obj) {
//         res.push([i, obj[i]]);
//     }
//     for(let i=0; i< res.length; i++) {
//         //console.log(res[i]);
//     }
// }).catch(console.log)

// get full details of specific anime by id
//const id = "21"
// as of Apr 12, 2022: the highest id for anime is 50713
const id = String(Math.floor(Math.random()*50713)+1)
console.log(id)
const random = anime.anime(44024);
random.then(result => {

    // set each data field to var
    if (typeof result.title != "undefined") {let title = result.title}
    if (typeof result.main_picture_medium != "undefined") {let main_pic_med = result.main_picture.medium}
    if (typeof result.main_picture.large != "undefined") {let main_pic_large = result.main_picture.large}
    if (typeof result.start_date != "undefined") {let start_date = result.start_date}
    if (typeof result.end_date != "undefined") {let end_date = result.end_date}
    if (typeof result.synopsis != "undefined") {let synopsis = result.synopsis}
    if (typeof result.status != "undefined") {let currStatus = result.status}
    if (typeof result.num_episodes != "undefined") {let num_ep = result.num_episodes}
    if (typeof result.genres != "undefined") {let genresObj = result.genres}
    if (typeof result.studios != "undefined") {let studiosObj = result.studios}
    if (typeof result.pictures != "undefined") {let picObj = result.pictures}
    if (typeof result.mean != "undefined") {let score = result.mean}
    console.log(result)
    
    // convert some data to more readable formats 
    if (typeof start_date === "undefined") {convertDate(start_date)} 
    if (typeof end_date === "undefined") {end_date = convertDate(end_date)}
    if (typeof currStatus === "undefined") {currStatus = convertStatus(currStatus)}
    synopsis = synopsis.split('[')[0];
    let genres = convertObj(genresObj);
    let studios = convertObj(studiosObj);

    // loop through json response
    let obj = result;
    let res = [];
    for(let i in obj) {
        res.push([i, obj[i]]);
    }
    for(let i=0; i< res.length; i++) {
        //console.log(res[i]);
    }
}).catch(console.log)

// return all anime from specific season
// const test = anime.animeSeasonal(2021, "summer", 0, 5, "anime_score");
// test.then(result => {
//     // still can't unpack nested objects (main_picture) and arrays (genres)
//     let obj = result.data;
//     let res = [];
//     for (let i in obj) {
//         res.push([i, obj[i]]);
//     }
//     for(let i=0; i< res.length; i++) {
//         //console.log(res[i]);
//     }
// }).catch(console.log)
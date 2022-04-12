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
function convertStatus (status) {
    status = status.charAt(0).toUpperCase() + status.slice(1);
    status = status.replace("_"," ");
    return status;
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
const main = anime.animes(query,0,1);
main.then(result => {

    // relevant api data for each anime
    let data = result.data[0].node;
    let title = result.data[0].node.title;
    let main_pic_med = result.data[0].node.main_picture.medium;
    let main_pic_large = result.data[0].node.main_picture.large;
    let start_date = result.data[0].node.start_date;
    let end_date = result.data[0].node.end_date;
    let synopsis = result.data[0].node.synopsis;
    let status = result.data[0].node.status;
    let num_ep = result.data[0].node.num_episodes;
    let genresObj = result.data[0].node.genres;
    let score = result.data[0].node.mean;
    let rank = result.data[0].node.rank;
    let studiosObj = result.data[0].node.studios;
    let id = result.data[0].node.id;
    //console.log(data);

    // convert some data to more readable formats 
    start_date = convertDate(start_date);
    end_date = convertDate(end_date);
    status = convertStatus(status);
    synopsis = synopsis.split('[')[0];
    let genres = convertObj(genresObj);
    let studios = convertObj(studiosObj);
    rank = "#" + rank;

    // loop through json response
    let obj = result.data[0].node;
    let res = [];
    for(let i in obj) {
        res.push([i, obj[i]]);
    }
    for(let i=0; i< res.length; i++) {
        //console.log(res[i]);
    }
})

// get full details of specific anime by id
const id = "21"
const op = anime.anime(id);
op.then(result => {

    // set each data field to var
    let title = result.title;
    let main_pic_med = result.main_picture.medium;
    let main_pic_large = result.main_picture.large;
    let start_date = result.start_date;
    let end_date = result.end_date;
    let synopsis = result.synopsis;
    let status = result.status;
    let num_ep = result.num_episodes;
    let genresObj = result.genres;
    let studiosObj = result.studios;
    let picObj = result.pictures;
    let score = result.mean;
    
    // convert some data to more readable formats 
    start_date = convertDate(start_date);
    end_date = convertDate(end_date);
    status = convertStatus(status);
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
})

// return all anime from specific season
const test = anime.animeSeasonal(2021, "summer", 0, 5, "anime_score");
test.then(result => {
    // still can't unpack nested objects (main_picture) and arrays (genres)
    let obj = result.data;
    let res = [];
    for (let i in obj) {
        res.push([i, obj[i]]);
    }
    for(let i=0; i< res.length; i++) {
        //console.log(res[i]);
    }
})
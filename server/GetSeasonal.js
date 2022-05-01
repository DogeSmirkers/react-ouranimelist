const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");

module.exports = { 
    //return all anime from specific season
    GetSeasonal: function (year, season, offset=0, limit=10, sort="anime_score", fields=structures.animeInList) {
        const main = anime.animeSeasonal(year, season, offset, limit, sort, fields);
        return main;

        // commented out bc might do in data parsing in front end instead

        // .then(result => {
        //     let obj = result.data;
        //     let res = [];
        //     for (let i in obj) {
        //         res.push([i, obj[i]]);
        //     }
        //     for(let i=0; i< res.length; i++) {
        //         console.log(res[i][1]['node']);
        //     }
        // }).catch(console.log)
    }
}
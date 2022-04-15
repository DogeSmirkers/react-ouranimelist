const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");
// import conversion functions
const tools = require('./Tools')

function getSeasonForNumberMonth(month) {
    switch (month) {
        case month < 3:
            return "winter";
        case month > 2 && month < 6:
            return "spring";
        case month > 5 && month < 9:
            return "summer";
        default:
            return "fall";
    }
}

module.exports = { 
    //return all anime from specific season
    GetSeasonal: function (year=new Date().getFullYear(), season=getSeasonForNumberMonth(new Date().getMonth()), offset=0, limit=20, sort="anime_score", fields=structures.animeInList) {
        const main = anime.animeSeasonal(year, season, offset, limit, sort, fields)
        .then(result => {
            let obj = result.data;
            let res = [];
            for (let i in obj) {
                res.push([i, obj[i]]);
            }
            for(let i=0; i< res.length; i++) {
                console.log(res[i][1]['node']);
            }
        }).catch(console.log)
    }
}
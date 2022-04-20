const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");
// import conversion functions
const tools = require('./Tools')

module.exports = {
    // return anime by rank
    GetRanking: function (rankingType="all", offset=0, limit=20, fields=structures.animeFull){
        const main = anime.animeRanking(rankingType, offset, limit, fields)
        return main
        // .then(result => {
        //     console.log(result.data)
        //     let obj = result.data;
        //     let res = [];
        //     for (let i in obj) {
        //         res.push([i, obj[i]]);
        //     }
        //     for(let i=0; i< res.length; i++) {
        //         //console.log(res[i][1]['node']);
        //     }
        // }).catch(console.log)
    }
}
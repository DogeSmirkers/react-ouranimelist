const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");

module.exports = {
    // return anime by rank
    GetRanking: function (rankingType="all", offset=0, limit=10, fields=structures.animeFull){
        const main = anime.animeRanking(rankingType, offset, limit, fields);
        return main;
    }
}
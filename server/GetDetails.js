const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");

module.exports = {
    // get full details of specific anime by id
    GetDetails: function (id, fields=structures.animeFull) {
        //@params: id, fields
        const main = anime.anime(id, fields);
        return main;
    }
}
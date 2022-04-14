const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");
// import conversion functions
const tools = require('./Tools')

module.exports = {
    // get full details of specific anime by id
    GetDetails: function (id, fields=structures.animeFull) {
        //@params: id, fields
        const main = anime.anime(id, fields)
        .then(result => {
            // set each data field to var
            if (typeof result.title !== "undefined") {let title = result.title}
            if (typeof result.main_picture_medium !== "undefined") {let main_pic_med = result.main_picture.medium}
            if (typeof result.main_picture.large !== "undefined") {let main_pic_large = result.main_picture.large}
            if (typeof result.start_date !== "undefined") {let start_date = result.start_date}
            if (typeof result.end_date !== "undefined") {let end_date = result.end_date}
            if (typeof result.synopsis !== "undefined") {let synopsis = result.synopsis}
            if (typeof result.status !== "undefined") {let currStatus = result.status}
            if (typeof result.num_episodes !== "undefined") {let num_ep = result.num_episodes}
            if (typeof result.genres !== "undefined") {let genresObj = result.genres}
            if (typeof result.studios !== "undefined") {let studiosObj = result.studios}
            if (typeof result.pictures !== "undefined") {let picObj = result.pictures}
            if (typeof result.mean !== "undefined") {let score = result.mean}
            console.log(result)
            
            // convert some data to more readable formats 
            if (typeof start_date !== "undefined") {tools.convertDate(start_date)} 
            if (typeof end_date !== "undefined") {end_date = tools.convertDate(end_date)}
            if (typeof currStatus !== "undefined") {currStatus = tools.convertStatus(currStatus)}
            if (typeof synopsis !== "undefined") {synopsis = synopsis.split('[')[0]}
            if (typeof genresObj !== "undefined") {let genres = tools.convertObj(genresObj)}
            if (typeof studiosObj !== "undefined") {let studios = tools.convertObj(studiosObj)}

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
    }
}
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
        return main
        .catch(console.log)
        // .then(result => {

        //     // set each data field to var if it exists
        //     title = tools.setData(result.title, result);
        //     if (typeof result.main_picture !== "undefined" && typeof result.main_picture.medium !== "undefined") {let main_pic_med = result.main_picture.medium}
        //     if (typeof result.main_picture !== "undefined" && typeof result.main_picture.large !== "undefined") {let main_pic_large = result.main_picture.large}
        //     start_date = tools.setData(result.start_date);
        //     end_date = tools.setData(result.end_date);
        //     synopsis = tools.setData(result.synopsis);
        //     currStatus = tools.setData(result.status);
        //     num_ep = tools.setData(result.num_episodes);
        //     genresObj = tools.setData(result.genres);
        //     studiosObj = tools.setData(result.studios);
        //     picObj = tools.setData(result.pictures);
        //     mean = tools.setData(result.mean);

        //     // convert some data to more readable formats 
        //     start_date = tools.convertIfExists(start_date);
        //     end_date = tools.convertIfExists(end_date);
        //     if (typeof currStatus !== "undefined") { currStatus = tools.convertStatus(currStatus)}
        //     if (typeof synopsis !== "undefined") {synopsis = synopsis.split('[')[0]}
        //     genres = tools.convertIfExists(genresObj);
        //     studios = tools.convertIfExists(studiosObj);
            
        //     // loop through json response
        //     let obj = result;
        //     let res = [];
        //     for(let i in obj) {
        //         res.push([i, obj[i]]);
        //     }
        //     for(let i=0; i< res.length; i++) {
        //         console.log(res[i]);
        //     }
        // }).catch(console.log)
    }
}
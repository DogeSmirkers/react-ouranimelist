const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");
// import conversion functions
const tools = require('./Tools')

module.exports = {
    //search by title
    Search: function (query, offset=0, limit=10, fields=structures.animeInList) {
        const main = anime.animes(query, offset, limit, fields);
        main.then(result => {

            // relevant api data for each anime
            if (typeof result.data[0].node !== "undefined") {let data = result.data[0].node}
            if (typeof result.data[0].node.title !== "undefined") {let title = result.data[0].node.title}
            if (typeof result.data[0].node.main_picture.medium !== "undefined") {let main_pic_med = result.data[0].node.main_picture.medium}
            if (typeof result.data[0].node.main_picture.large !== "undefined") {let main_pic_large = result.data[0].node.main_picture.large}
            if (typeof result.data[0].node.start_date !== "undefined") {let start_date = result.data[0].node.start_date}
            if (typeof result.data[0].node.end_date !== "undefined") {let end_date = result.data[0].node.end_date}
            if (typeof result.data[0].node.synopsis !== "undefined") {let synopsis = result.data[0].node.synopsis}
            if (typeof result.data[0].node.status !== "undefined") {let currStatus = result.data[0].node.status}
            if (typeof result.data[0].node.num_episodes !== "undefined") {let num_ep = result.data[0].node.num_episodes}
            if (typeof result.data[0].node.genres !== "undefined") {let genresObj = result.data[0].node.genres}
            if (typeof result.data[0].node.mean !== "undefined") {let score = result.data[0].node.mean}
            if (typeof result.data[0].node.rank !== "undefined") {let rank = result.data[0].node.rank}
            if (typeof result.data[0].node.studios !== "undefined") {let studiosObj = result.data[0].node.studios}
            if (typeof result.data[0].node.id !== "undefined") {let id = result.data[0].node.id}
            //console.log(data);

            // convert some data to more readable formats 
            if (typeof start_date !== "undefined") {start_date = tools.convertDate(start_date)}
            if (typeof end_date !== "undefined") {end_date = tools.convertDate(end_date)}
            if (typeof currStatus !== "undefined") {currStatus = tools.convertStatus(currStatus)}
            if (typeof synopsis !== "undefined") {synopsis = synopsis.split('[')[0]}
            if (typeof genresObj !== "undefined") {let genres = tools.convertObj(genresObj)}
            if (typeof studiosObj !== "undefined") {let studios = tools.convertObj(studiosObj)}
            if (typeof rank !== "undefined") {rank = "#" + rank}

            // loop through json response
            let obj = result.data[0].node;
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
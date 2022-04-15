const {client_id} = require('./config');
const API = require('./myanimelist-api-v2')
const anime = new API.API_ANIME(client_id);
const structures = require("./myanimelist-api-v2/src/Mal_Api_Authorized/Mal_Api_Anime/structures.json");
// import conversion functions
const tools = require('./Tools')

module.exports = {
    //search by title
    Search: function (query, offset=0, limit=10, fields=structures.animeInList) {
        const main = anime.animes(query, offset, limit, fields)
        .then(result => {

            // curr for only the first result in list, otherwise look at other API calls for looping

            // set each data field to var if it exists
            data = tools.setData(result.data[0].node);
            title = tools.setData(result.data[0].node.title);
            main_picture_medium = tools.setData(result.data[0].node.main_picture.medium);
            main_picture_large = tools.setData(result.data[0].node.main_picture.large);
            if (typeof result.data[0].node.main_picture !== "undefined" && typeof result.data[0].node.main_picture.medium !== "undefined") {let main_pic_med = result.data[0].node.main_picture.medium}
            if (typeof result.data[0].node.main_picture !== "undefined" && typeof result.data[0].node.main_picture.large !== "undefined") {let main_pic_large = result.data[0].node.main_picture.large}
            start_date = tools.setData(result.data[0].node.start_date);
            end_date = tools.setData(result.data[0].node.end_date);
            synopsis = tools.setData(result.data[0].node.synopsis);
            currStatus = tools.setData(result.data[0].node.status);
            num_ep = tools.setData(result.data[0].node.num_episodes);
            genresObj = tools.setData(result.data[0].node.genres);
            studiosObj = tools.setData(result.data[0].node.studios);
            mean = tools.setData(result.data[0].node.mean);
            rank = tools.setData(result.data[0].node.rank);
            id = tools.setData(result.data[0].node.id);

            // convert some data to more readable formats 
            start_date = tools.convertIfExists(start_date);
            end_date = tools.convertIfExists(end_date);
            if (typeof currStatus !== "undefined") { currStatus = tools.convertStatus(currStatus)}
            if (typeof synopsis !== "undefined") {synopsis = synopsis.split('[')[0]}
            if (typeof rank !== "undefined") {rank = "#" + rank}
            genres = tools.convertIfExists(genresObj);
            studios = tools.convertIfExists(studiosObj);

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
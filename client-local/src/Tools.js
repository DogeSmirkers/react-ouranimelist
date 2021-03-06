module.exports = {
    // convert date to better format: yyyy-mm-dd to M dd yyyy
    convertDate: function (date) {
        date = new Date(date);
        date = date.toDateString();
        date = date.substring(3,16);
        return date;
    },

    // convert status to more readable format
    convertStatus: function (currStatus) {
        currStatus = currStatus.replaceAll("_"," ");
        return currStatus.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    },

    // pretties up synopsis
    // might add more later
    convertSynopsis: function (synopsis) {
        return synopsis.split('[')[0]
    },

    // obj --> string of what was in obj
    // only for genres and studios, NOT pictures
    // ex: genresObj --> list of genres
    convertObj: function (obj) {
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
    },

    // convert animes obj to array 
    convertAnimes: function (animes) {
        let obj = animes;
        let res = [];
        for (let i in obj) {
            res.push([i, obj[i]]);
        };
        let animeList = [];
        for(let i=0; i< res.length; i++) {
            animeList[i] = res[i][1]['node'];
        };
        return animeList;
    }
}
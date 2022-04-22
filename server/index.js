const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;
// conversion functions 
const tools = require('./Tools')

//app.use(express.static('../client/public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const search = require('./Search')
// search by title
app.get('/search', (req, res, next) => {
    const query = req.query
    search.Search(query)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(next)
})

const getDetails = require('./GetDetails')
// get anime details 
app.get('/anime/:id', (req, res, next) => {
    const id = req.params.id;
    getDetails.GetDetails(id)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(next)
})

const getSeasonal = require('./GetSeasonal')
// get by season
app.get('/seasonal', (req, res, next) => {
    getSeasonal.GetSeasonal()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(next)
})

const getRanking = require('./GetRanking');
// get anime ranking
app.get('/ranking', (req, res, next) => {
    getRanking.GetRanking()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(next)
})

// error handling
app.get('/error', (req, res) => {
    res.send("Error!")
})
app.use((error, req, res, next) => {
    console.log("Error handler triggered, path:", req.path)
    console.error('Error: ', error)
   
    if (error.type == 'redirect')
        res.redirect('/error')

    else if (error.type == 'time-out') // arbitrary condition check
        res.status(408).send(error)

    else if (req.path.includes("/anime/")) {
        // get anime id
        var path = req.path;
        path = path.split('/');
        let id = path[2];
        res.status(404).send(`Error! Anime with ID \'${id}\' doesn\'t exist. 😓`);
    }
    // should add more specific errors for each route
    // ex: for /ranking can search with diff ranking types and can produce error for invalid ranking type
    else 
        res.status(500).send(error)
        
})

app.listen(PORT, () => {
    console.log(`OurAnimeList is listening at http://localhost:${PORT}`); 
})
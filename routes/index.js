var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const OWI_API_KEY=process.env.OWI_API_KEY;

router.get('/movies', (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWI_API_KEY}`)
    .then(response => response.json())
    .then(apiData => {
        res.json({movies: apiData})
    });
   
});

module.exports = router;

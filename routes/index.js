var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const OWI_API_KEY=process.env.OWI_API_KEY;


/*
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer f1dc4bb0cd09eed3360d9d0b416598b1'
    }
  }; */

  //http://localhost:3000/movies
  
router.get('/movies', (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWI_API_KEY}`)
    .then(response => response.json())
    .then(apiData => {
        res.json({movies: apiData})
    });
    //.catch(err => console.error(err));
});

module.exports = router;

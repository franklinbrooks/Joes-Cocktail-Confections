// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// import sequelizer for POST routes
var models = require('../db/models/index');



















/* Render order cart summary */
router.get('/', function(req, res, next) {
  console.log('get orders is connected');
  const axios = require('axios');
  const url = 'http://swapi.co/api/people/1/';
  axios.get(url)
       .then( (response) => {
         console.log(response);
          res.send(response.data.name);



       })
       .catch( (error) => {
         console.log(error);
       });

});

module.exports = router;

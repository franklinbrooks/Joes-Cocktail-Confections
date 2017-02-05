// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// import sequelizer for POST routes
var models = require('../db/models/index');

/* Render order cart summary */
router.get('/', authHelpers.loginRequired, (req, res)=> {
  res.render('order/index', {
    title: "Joe's Cocktail Confections - Your Order"
  });
});

/* Update route once ejs table variables are updated */

module.exports = router;

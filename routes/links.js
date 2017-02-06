// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// import sequelizer for POST routes
var models = require('../db/models/index');
// importing custom order helpers middleware to create an order
const orderHelpers = require('../ordfnchelper/order-helpers');
// const axios = require('axios');

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('links/about', {
    title: "Joe's Cocktail Confections - About Us"
  });
});

/* GET Alcohol page. */
router.get('/alcohol', function(req, res, next) {
  res.render('links/alcohol', {
    title: "Joe's Cocktail Confections - Alcohol Policy"
  });
});

/* GET Allergies page. */
router.get('/allergies', function(req, res, next) {
  res.render('links/allergies', {
    title: "Joe's Cocktail Confections - Food Allergies"
  });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('links/contact', {
    title: "Joe's Cocktail Confections - Contact Us"
  });
});

/* GET Terms page. */
router.get('/terms', function(req, res, next) {
  res.render('links/terms', {
    title: "Joe's Cocktail Confections - Contact Us"
  });
});

module.exports = router;

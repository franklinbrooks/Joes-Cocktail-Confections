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
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/about', {
    title: "Joe's Cocktail Confections - About Us",
    username: username
  });
});

/* GET Alcohol page. */
router.get('/alcohol', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/alcohol', {
    title: "Joe's Cocktail Confections - Alcohol Policy",
    username:username
  });
});

/* GET Allergies page. */
router.get('/allergies', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/allergies', {
    title: "Joe's Cocktail Confections - Food Allergies",
    username:username
  });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/contact', {
    title: "Joe's Cocktail Confections - Contact Us",
    username:username
  });
});

/* GET Events page. */
router.get('/events', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/events', {
    title: "Joe's Cocktail Confections - Contact Us",
    username:username
  });
});

/* GET Privacy page. */
router.get('/privacy', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/privacy', {
    title: "Joe's Cocktail Confections - Contact Us",
    username:username
  });
});

/* GET Terms page. */
router.get('/terms', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/terms', {
    title: "Joe's Cocktail Confections - Contact Us",
    username:username
  });
});

/* GET Testimonials page. */
router.get('/testimonials', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('links/testimonials', {
    title: "Joe's Cocktail Confections - Customer Testimonials",
    username:username
  });
});

module.exports = router;

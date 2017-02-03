var express = require('express');
var router = express.Router();


router.get('/register', function(req, res, next) {
  res.render('auth/register', {
    title: "Joe's Cocktail Confections - Register New Customer"
  });
});

router.get('/login', function(req, res, next) {
  res.render('auth/login', {
    title: "Joe's Cocktail Confections - Customer Login"
  });
});

module.exports = router;

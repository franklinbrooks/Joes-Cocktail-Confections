var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('index', {
    title: "Joe's Cocktail Confections Home",
    username:username
  });
});

module.exports = router;

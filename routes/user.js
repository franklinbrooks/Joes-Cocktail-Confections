// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');

/* Rendering user page */
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    title: 'Profile'
  });
});

module.exports = router;

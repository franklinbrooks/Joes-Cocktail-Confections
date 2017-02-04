// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// var models = require('../server/models/index'); // need to import sequelizer???

/* Rendering user page */
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    title: 'Profile'
  });
});

router.get('/edit', function(req, res, next) {
  res.render('user/edit', {
    user: req.user.dataValues,
    title: "Joe's Cocktail Confections - Edit User"
  });
});

router.put('/edit', function(req, res, next) { // edit user info
  models.Users.update({ // more sequelizer  // 'User' (orig) or 'user'????
    username: req.body.username,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,
    cellNumber: req.body.cellNumber
  }, { where: { username: req.body.username } }).then(function() {
    res.redirect('/user/index');
  });
});

/*
router.delete('/:id', function(req, res, next) {  // destroy processed by methodOverride
  models.User.destroy({
    where: { id: req.params.id }
  }).then(function(user) {
    res.redirect('/users');
  });
});
*/

module.exports = router;

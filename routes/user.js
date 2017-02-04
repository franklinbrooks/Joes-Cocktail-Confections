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

/*
router.put('/:id', function(req, res, next) {
  models.User.update({ // more sequelizer
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob
  }, { where: { id: req.params.id } }).then(function() {
    res.redirect('/users/' + req.params.id);
  });
});

router.delete('/:id', function(req, res, next) {  // destroy processed by methodOverride
  models.User.destroy({
    where: { id: req.params.id }
  }).then(function(user) {
    res.redirect('/users');
  });
});
*/

module.exports = router;

// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// import sequelizer for POST routes
var models = require('../db/models/index');

/* Rendering user home page - WORKS */
router.get('/:id', authHelpers.loginRequired, (req, res, next) => {
  res.render('user/index', {
    user: req.user.dataValues,
    title: "Customer Profile"
  });
});

/* Rendering user edit page - WORKS */
router.get('/:id/edit', function(req, res, next) { // WORKS
  res.render('user/edit', {
    title: "Joe's Cocktail Confections - Edit User",
    user: req.user.dataValues
  });
});

/* POSTing user edits, then redirects to user home page */
router.put('/:id', function(req, res, next) { // edit user info
  models.User.update({ // more sequelizer
    username: req.body.username,
    password: req.body.password,    // was hash, now does not encrypt pswd
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob,
    cellNumber: req.body.cellNumber
  }, { where: { id: req.params.id } })
  .then(function() {
    res.redirect('/user/' + req.params.id);
  });
});

/* POSTing user delete, then LOGOUT and send to root index page */
router.delete('/:id', function(req, res, next) {  // destroy processed by methodOverride
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.redirect('/');
  });
});

module.exports = router;

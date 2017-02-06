const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');

router.get('/register', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/register', {
    title: "Joe's Cocktail Confections - Register New Customer"
  });
});

/* Registration route */
router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user/:id');
    });
  })
  .catch((err) => { res.status(500).render('errortaken2'); });
});

/* Rendering log in page */
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login', {
    title: "Joe's Cocktail Confections - Customer Login"
  });
});

/*  Authenticating user password */
router.post('/login', passport.authenticate('local', {
    successRedirect: '/user/:id',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

/* Logging Out */
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

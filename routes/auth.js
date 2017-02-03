var express = require('express');
var router = express.Router();


router.get('/register', function(req, res, next) {
  res.render('auth/register', {
    title: "Joe's Cocktail Confections - Register New Customer"
  });
});

function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');
  return next();
}

router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

router.get('/login', function(req, res, next) {
  res.render('auth/login', {
    title: "Joe's Cocktail Confections - Customer Login"
  });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

// importing passport
const passport = require('passport');
// importing passport-local
const LocalStrategy = require('passport-local').Strategy;
/*
importing passport, models, and the auth-helpers custom middleware
*/
const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');

const options = {};
// invoking passport
init();
// new passport stragey
passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  models.User.findOne({
    where: {
      username: username
    }
  })
  .then((user) => {
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user.dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user.dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;

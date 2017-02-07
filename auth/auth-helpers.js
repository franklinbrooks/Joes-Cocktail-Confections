/* Importing bcrypt */
const bcrypt = require('bcryptjs');
/* Importing database */
const models = require('../db/models/index');
/* Importing moment */
const moment = require('moment');

/* Function to compare password */
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

/* Login Redirect Function */
function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user/:id');
  return next();
}

/* Creating a user */
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return models.User.create({
    username: req.body.username,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: moment(req.body.dob).format('YYYY MM DD'),
    cellNumber: req.body.cellNumber
  });
}

/* Update password */
/*function updatePassword(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
    return models.User.update({
    password: hash
  });
}
*/


/* Redirecting users who aren't logged in */
function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/auth/login');
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}

/* Importing bcrypt */
const bcrypt = require('bcryptjs');

const models = require('../db/models/index');

/* Function to compare password */
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

/* Login Redirect Function */
function loginRedirect(req, res, next) {
  console.log('login Redirect', req.username);
  if (req.user) res.redirect('/user');

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
    dob: req.body.dob,
    cellNumber: req.body.cellNumber
  });
}

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

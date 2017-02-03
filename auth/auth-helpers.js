const bcrypt = require('bcryptjs');
const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return models.User.create({
    user_name: req.body.user_name,
    password: hash,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    cell_number:req.body.cell_number,
    dob: req.body.dob
  });
}
function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/auth/login');
  return next();
}

function loginRedirect(req, res, next) {
  if (req.user) res.redirect('/user');
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}

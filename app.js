// Middleware and dependencies
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

// Routes
const index = require('./routes/index');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const products = require('./routes/products');
const order = require('./routes/order');
const links = require('./routes/links');
const app = express();
const methodOverride = require('method-override'); // for edit/delete

// Environment variables
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// .use methods
app.use(methodOverride('_method'));  // for edit/delete
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

/* User Routes */
app.use('/', index);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/products', products);
app.use('/order', order);
app.use('/links', links);

// Handle 404 error page both error pages need to be at bottom of app.js
app.use(function(req, res) {
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.status(400);
  res.render('error', {
    title: "Joe's Cocktail Confections - Error-404",
    username:username
  });
});

// Handle 500 error page
app.use(function(error, req, res, next) {
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.status(500);
  res.render('errortaken', {
    title: "Joe's Cocktail Confections - Error-500",
    error: error,
    username: username
  });
});

module.exports = app;

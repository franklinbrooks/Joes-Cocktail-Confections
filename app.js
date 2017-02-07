var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const session = require('express-session');
const passport = require('passport');
const index = require('./routes/index');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const products = require('./routes/products');
const order = require('./routes/order');
const links = require('./routes/links');
const app = express();
const methodOverride = require('method-override'); // for edit/delete
// load environment variables
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));  // for edit/delete

// uncomment after placing your favicon in /public
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



/*
app.use(function (req, res, next) {
  res.render('error', {
    title: "Joe's Cocktail Confections - Error"
  });
});
*/
// Handle 404 error page both error pages need to be at bottom of app.js
app.use(function(req, res) {
  res.status(400);
  res.render('error', {
    title: "Joe's Cocktail Confections - Error-404"
  });
});

  // Handle 500 error page
app.use(function(error, req, res, next) {
  res.status(500);
  res.render('errortaken', {
    title: "Joe's Cocktail Confections - Error-500",
    error: error
  });
});


/* Below error handling routes replaced by custom 404 route above */
// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/
// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('/error');
});*/

module.exports = app;

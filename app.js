var express = require('express');
var path = require('path');

// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');
require('dotenv').config();
const session = require('express-session');
var passport = require('passport');

var jquery = require('jquery');
// var fontAwesome = require('font-awesome'); // breaks
// var materializeCss = require('materialize-css'); // breaks


var index = require('./routes/index');
var user = require('./routes/user');
var app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({  // session allows you to read global env variables
 secret: process.env.SECRET_KEY, // secret key from .env
 resave: false,
 saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/user', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

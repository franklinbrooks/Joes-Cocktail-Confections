// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// import sequelizer for POST routes
var models = require('../db/models/index');

/* Render order cart summary */
router.get('/', function(req, res, next) {  // main route
 models.Order.findAll({
    where: { id: order.id } // How to pass in order id value???
  }).then(function(items){
    res.render('order/index', {
      title: "Joe's Cocktail Confections - Your Order",
      items: items
    });
  });
});

module.exports = router;

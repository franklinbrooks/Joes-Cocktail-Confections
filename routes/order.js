// importing express
var express = require('express');
// invoking router method
var router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// import sequelizer for POST routes
var models = require('../db/models/index');
// importing custom order helpers middleware to create an order
const orderHelpers = require('../ordfnchelper/order-helpers');
// const axios = require('axios');

// router.get('/', authHelpers.loginRequired, (req, res)=> {
//   res.render('order/index', {
//     title: "Joe's Cocktail Confections - Your Order"
//   });

// });
/* Creating Order */
router.post('/newOrder', authHelpers.loginRequired, (req, res, next)  => {
  orderHelpers.createOrder(req, res)
  .then((order) => {
      res.redirect('/order');
    })
    .catch((err) => { res.status(500).json({ status: 'error' });
  })
});

router.get('/', function(req, res, next) {  // main route
 models.Order.findAll({
    where: { userId: req.user.id }
  }).then(function(items){
    res.render('/order', {
      title: "Cupcakes - Joe's Cocktail Confections",
      items: items
    });
  });
});

/* Update route once ejs table variables are updated */

module.exports = router;

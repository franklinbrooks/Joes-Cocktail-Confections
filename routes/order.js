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

router.get('/', orderHelpers.getOrders, function(req, res, next) {
console.log('orders');
 models.Order.findAll({
    where: { id: '3' }
  }).then(function(items){
    console.log(items);
    res.render('/cart', {
      title: "Cupcakes - Joe's Cocktail Confections",
      items: items
    });
  });
});

router.get('/cart', function(req,res,next) {
  res.send('cart')
})

/* Update route once ejs table variables are updated */

module.exports = router;

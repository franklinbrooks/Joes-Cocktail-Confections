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
// router.get('/', orderHelpers.getOrders, function(req, res, next) {
// console.log('order');
//  models.Order.findAll({
//     where: { id: '3' }
//   }).then(function(items){
//     console.log('Items:',function(){items.forEach(function(item){console.log(item)})  }() );
//     res.render('order/cart', {
//       title: "Cupcakes - Joe's Cocktail Confections",
//       items: items
//     });
//   });
// });

router.get('/', orderHelpers.getOrders, function(req,res,next) {
  console.log('REsponseX', res);
  console.log('orders',res.locals.orders);
  // function(res.locals.orders){
  //   console.log('Items:',function(){items.forEach(function(item){console.log(item)})  }() );
  //   res.render('order/cart', {
  //     title: "Cupcakes - Joe's Cocktail Confections",
  //     items: items
  //   });
  // });
});


/* Creating Order */
router.post('/newOrder', authHelpers.loginRequired, (req, res, next)  => {
  orderHelpers.createOrder(req, res)
  .then((order) => {
      res.redirect('/order');
    })
    .catch((err) => { res.status(500).json({ status: 'error' });
  })
});



// router.get('/cart', function(req,res,next) {
//
// })

/* Update route once ejs table variables are updated */

module.exports = router;

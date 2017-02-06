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
// node mailer
const nodemailer = require('nodemailer');

/*
Shopping Cart Page
Custom orderHelpers middleware to get order based off off user id
Route is protected and requires login
*/
router.get('/', authHelpers.loginRequired, orderHelpers.getOrders, function(req,res,next) {
    res.render('order/cart', {
      title: "Cupcakes - Joe's Cocktail Confections",
      items: res.locals.orders
    });

});


/* Creating Order - Add to Order Button  */
router.post('/newOrder', authHelpers.loginRequired, (req, res, next)  => {
  orderHelpers.createOrder(req, res)
  .then((order) => {
      res.redirect('/order');
    })
    .catch((err) => { res.status(500).json({ status: 'error' });
  })
});

/* Submitting an order - using nodemailer */
router.get('/submitOrder', orderHelpers.getOrders, (req, res, next) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user:process.env.GMAIL_USERNAME,
          pass:process.env.GMAIL_PASSWORD
      }
  });

console.log(res.locals.orders);
  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Test 👻" <foo@blurdybloop.com>', // sender address
      to: 'bar@blurdybloop.com, hello243@mailinator.com', // list of receivers
      subject: `${req.user.username}`, // Subject line
      text: req.user.username, // plain text body
      html: `<b>${res.locals.orders[0].productName}</b>` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
          res.redirect('/error')
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.redirect('/')
  });

});


module.exports = router;

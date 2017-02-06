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

  // setting transport variable to nodemailer, invoking createTransport method, and passing gmail log in credentials as an object
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          // Reading username from process object
          user:process.env.GMAIL_USERNAME,
          // Reading password from process object
          pass:process.env.GMAIL_PASSWORD
      }
  });
  // creating a variable to hold orders
  let mail = 'hello';
  // using a for loop to iterate through orders array and store in a variable
  for(let index of res.locals.orders) {
     mail +=
      ` <h1>
        <p> + ${index.productName} + <br />
        + <p>Quantity' + ${index.quantity} + </p><br />
      `
  }



  // setting up email
  let mailOptions = {
      from: '"Test 👻" <foo@blurdybloop.com>', // sender address
      to: 'bar@blurdybloop.com, hello243@mailinator.com', // list of receivers
      subject: `${req.user.username}`, // Subject line
      text: req.user.username, // plain text body
      html:
        `<b>
          ${mail}
        </b>` // html body
  };

  // sending email using sendEmail method
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

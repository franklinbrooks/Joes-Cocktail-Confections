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
// importing moment
const moment = require('moment');

/*
Shopping Cart Page
Custom orderHelpers middleware to get order based off of user id
Route is protected and requires login
*/
router.get('/', authHelpers.loginRequired, orderHelpers.getOrders, function(req,res,next) {


  // setting username variable to null to allow for conditional rendering
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  res.render('order/cart', {
    title: "Cupcakes - Joe's Cocktail Confections",
    items: res.locals.orders,
    username: username
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

/* POSTing item delete, then back to order index page */
router.delete('/:id', function(req, res, next) {  // destroy processed by methodOverride
  models.Order.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(order) {
    res.redirect('/order');
  });
});

/* Submitting an order - using nodemailer */
router.get('/submitOrder', orderHelpers.getOrders, (req, res, next) => {
  // setting transporter variable to nodemailer, invoking createTransport method, and passing gmail log in credentials as an object
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          // Reading username from process object
          user:process.env.GMAIL_USERNAME,
          // Reading password from process object
          pass:process.env.GMAIL_PASSWORD
      }
  });
  /*
  creating a variable to hold orders, outputting username and cellnumber from request object
  */
  let mail = `
    <p>
       <strong>Name:</strong>
       ${req.user.username}
       <br />
       <strong>Cell Number:</strong>
       ${req.user.cellNumber}
       <br />
       <strong>Order Submitted:</strong>${moment().format('MMMM Do YYYY, h:mm:ss a')}
       <hr />
    </p>`;
  // using a for loop to iterate through orders array and store in a variable
  for(let index of res.locals.orders) {
     mail +=
      `
        <p>Prouduct Name: ${index.productName}  </p>
        <p>Quantity: ${index.quantity} orders </p>
        <p>Total: $ ${(index.quantity * index.price *0.01*index.unitSize).toFixed(2)}
        <hr />
      `
  }

  // setting up email - sending a copy to buyer and seller
  let mailOptions = {
      from: `"Joe's Cocktail Confections" <${process.env.GMAIL_USERNAME}>`, // sender address from env variable
      to: `${process.env.GMAIL_USERNAME}, ${req.user.email}`, // list of recipients
      subject: `${req.user.username} has submitted an order`, // Email subject
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

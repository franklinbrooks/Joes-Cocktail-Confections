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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Your Order With Joe's Cocktail Confections</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Codystar" rel="stylesheet">
<style type="text/css" media="screen">
  #backgroundTable {
    margin:0;
    padding:0;
    width:100% !important;
    line-height: 100% !important;
  }
  table {
    width: 85%;
    margin: 0 auto;
    background-color: #00B8D4;
  }
  caption {
    padding-left: 1%;
    text-align: left;
    background-color: #00B8D4;
    font-size: 12px;
    font-family: Roboto, sans-serif;
    color: white;
  }
  .brand-logo {
    font-size: 2rem;
    font-family: Codystar, sans-serif;
    color: white;
    animation: blink 2s infinite;
  }
  @keyframes blink {
    0%{color: rgba(255,255,255, 0.8);}
    25%{color: rgba(248,248,248,1); }
    50%{color: rgba(240,240,80,0.9); }
    75%{color: rgba(224,224,224,0.9); }
    100%{color: rgba(232,232,232, 0.8); }
  }
  th {
    font-size: 12px;
    font-family: Roboto, sans-serif;
    color: #666666;
  }
  td {
    border: none;
    font-size: 12px;
    font-family: Roboto, sans-serif;
    color: #666666;
  }
  tfoot {
    margin: 0 auto;
    border: none;
    padding-left: 1%;
    text-align: left;
    background-color: #00B8D4;
    font-size: 12px;
    font-family: Roboto, sans-serif;
  }
  .blue {
    padding-left: 1%;
    border: none;
    color: white;
    background-color: #00B8D4;
  }
  img {
    outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;
  }
  a img {
    border:none;
  }
  .image_fix {
    display:block;
  }
</style>
</head>
<body>
<table cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
  <table>
    <caption>&nbsp;</caption>
    <caption><a href="#" class="brand-logo" target="new" style="text-decoration:none">JCC</a></caption>
    <caption>&nbsp;</caption>
    <caption>Your Order With Joe's Cocktail Confections</caption>
    <caption>&nbsp;</caption>
  </table>

  <table style="background-color: white">
    <thead>
      <th>Order Details</th>
    </thead>
    <tbody>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
         <td><strong>Name: </strong> ${req.user.username} </td>
      </tr>
      <tr>
        <td><strong>Cell Number: </strong> ${req.user.cellNumber} </td>
      </tr>
      <tr>
        <td><strong>Order Submitted: </strong>${moment().format('MMMM Do YYYY, h:mm:ss a')} </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
    `;

  // using a for loop to iterate through orders array and store in a variable
  for(let index of res.locals.orders) {
     mail +=
      `
        <p>Prouduct Name: ${index.productName}  </p>
        <p>Quantity: ${index.quantity} X ${index.unitSize} units</p>
        <p>Total: $ ${(index.quantity * index.price *0.01*index.unitSize).toFixed(2)}
        <hr />
      `
  };

     mail += `
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
       <td style="text-align:center;"><i>Watch your emails and your mobile telephone!</i></td>
       </td>
      </tr>
      <tr>
        <td style="text-align:center;">Joe will be in contact with you shortly to finalize details and arrange invoicing.</td>
      </tr>
    </tbody>
  </table>
  <table>
    <tfoot>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="blue" style="text-align: center;"><span style="display:inline-block; font-size:1rem;">We appreciate your business!</span><span style="display:inline-block">&nbsp; - &nbsp; from the Joe's Cocktail Confections team!</span></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="blue">
          <h4 style="font-size:1rem; display:inline-block">Find us on social media!</h4>
          <!--  FOR PRODUCTION HOST IMGES ON ANOTHER SERVER THAN FRANKLINCHRISTOPHERBROOKS.COM DEV SERVER!!! -->
          <a class="blue" href="https://www.facebook.com/JoesCocktailCupcakes" target="new"><img src="http://www.franklinchristopherbrooks.com/images/facebook.gif" height=50 width=50> Facebook </a>
          <a class="blue" href="https://www.instagram.com/joescocktailconfections" target="new"><img src="http://www.franklinchristopherbrooks.com/images/instagram.png" height=50 width=50> Instagram </a>
        </td>
      </tr>
      <tr>
        <td class="blue" style="text-align:right;">Copyright © 2017 Joe's Cocktail Confections. All rights reserved.</td>
      </tr>
    </tfoot>
  </table>
</table>
</body>
</html>
     `;

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

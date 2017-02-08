var express = require('express');
var router = express.Router();
var models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers');

/* GET products listing. */

router.get('/cupcakes', function(req, res, next) {  // main route
  //username variable set to null to allow for conditional rendering of header
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  // grabbing from Products table where route = cupcakes
 models.Product.findAll({
    where: { category: "Cupcakes"}
  }).then(function(cupcakes){
    res.render('products/cupcakes', {
      title: "Cupcakes - Joe's Cocktail Confections",
      cupcakes: cupcakes,
      username:username
    });
  });
});
// cakes category route from Products
router.get('/cakes', function(req, res, next) {
  //username variable set to null to allow for conditional rendering of header
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  // Grabbing from Products table where category = cakes
  models.Product.findAll({
    where: { category: "Cakes"}
  }).then(function(cakes){
    res.render('products/cakes', {
    title: "Cakes - Joe's Cocktail Confections",
    cakes: cakes,
    username:username
   });
  });
});

router.get('/strawberries', function(req, res, next) {
  //username variable set to null to allow for conditional rendering of header
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  models.Product.findAll({
    where: { category: "Strawberries"}
  }).then(function(strawberries){
  res.render('products/strawberries', {
    title: "Strawberries - Joe's Cocktail Confections",
    strawberries: strawberries,
    username:username
  });
 });
});

/* item page route. Will show individual item details */
router.get('/:id', function(req, res, next) {
  //username variable set to null to allow for conditional rendering of header
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  // id should be req.params.id to allow for dynamic content.
  models.Product.findById(req.params.id).then(function(product) {
    res.render('products/item',
    { productDetails: product,
      title: `Joe's Cocktail Confections - ${product.productName}`,
      username:username
    });
  });
});



module.exports = router;

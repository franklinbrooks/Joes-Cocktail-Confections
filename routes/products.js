var express = require('express');
var router = express.Router();
var models = require('../db/models/index');


const authHelpers = require('../auth/auth-helpers');

/* item page route. Will show individual item details */
router.get('/test', function(req, res, next) {
  console.log('I hear you');
  // id should be req.params.id to allow for dynamic content. Am using 1 for testing
  models.Product.findById(7).then(function(product) {
    res.render('products/item',
    { productDetails: product,
      title: `Joe's Cocktail Confections - ${product.productName}`
    });
  });
});


/* GET products listing. */

router.get('/cupcakes', function(req, res, next) {  // main route
 models.Product.findAll({
    where: { category: "Cupcakes"}
  }).then(function(cupcakes){
    res.render('products/cupcakes', {
      title: "Cupcakes - Joe's Cocktail Confections",
      cupcakes: cupcakes
    });
  });
});

router.get('/cakes', function(req, res, next) {
  models.Product.findAll({
    where: { category: "Cakes"}
  }).then(function(cakes){
    res.render('products/cakes', {
    title: "Cakes - Joe's Cocktail Confections",
    cakes: cakes
   });
  });
});

router.get('/strawberries', function(req, res, next) {
  models.Product.findAll({
    where: { category: "Strawberries"}
  }).then(function(strawberries){
  res.render('products/strawberries', {
    title: "Strawberries - Joe's Cocktail Confections",
    strawberries: strawberries
  });
 });
});


/*
router.get('/item', function(req, res, next) {
  res.render('products/item', {
    title: "Joe's Cocktail Confections - Item Detail"
  });
});

*/


module.exports = router;

var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

/* item page route. Will show individual item details */
router.get('/test', function(req, res, next) {
  console.log('I hear you');
  // id should be req.params.id to allow for dynamic content. Am using 1 for testing
  models.Product.findById(1).then(function(product) {
    res.render('products/item',
    { productDetails: product,
      title: `Joe's Cocktail Confections - ${product.productName}`
    });
  });
});


/* GET products listing. */
router.get('/cupcakes', function(req, res, next) {
  res.render('products/cupcakes', {
    title: "Joe's Cocktail Confections - Cupcake Index"
  });
});

router.get('/cakes', function(req, res, next) {
  res.render('products/cakes', {
    title: "Joe's Cocktail Confections - Cake Index"
  });
});

router.get('/strawberries', function(req, res, next) {
  res.render('products/strawberries', {
    title: "Joe's Cocktail Confections - Strawberries Index"
  });
});


module.exports = router;

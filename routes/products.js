var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/cupcakes', function(req, res, next) {
  res.render('products/cupcakes', {
    title: "Joe's Cocktail Confections - Cupcake Index"
  });
});

/*router.get('/', function(req, res, next) {  // main route
  models.Products.findAll({}).then(function(products){
    res.render('products/cupcakes', {
      title: "Joe's Cocktail Confections - Cupcake Index",
      products: products
    });
  });
});*/

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

router.get('/item', function(req, res, next) {
  res.render('products/item', {
    title: "Joe's Cocktail Confections - Item Detail"
  });
});


module.exports = router;

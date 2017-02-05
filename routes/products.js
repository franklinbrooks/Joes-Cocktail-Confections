var express = require('express');
var router = express.Router();
var models = require('../db/models/index');

const authHelpers = require('../auth/auth-helpers');
const displayCupcakes = require('../ordfnchelper/displaycupcakes')

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

router.get('/item/:id', function(req, res, next) {
  res.render('products/item', {
    title: "Joe's Cocktail Confections - Item Detail"
  });
});


module.exports = router;

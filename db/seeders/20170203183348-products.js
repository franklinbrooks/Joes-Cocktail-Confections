'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      { product_name: 'Vanilla Blanco Frosted Ciroc Pineapple',  category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/vanilla.jpg', unit_size: '10', description: 'Pineapple adds fruity sweetness to this vintage banana-nut spice cake recipe, made complete with the perfect', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Frosted Buttercream Hennessey', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/colada.jpg', unit_size: '9', description: 'Extra fruity sweetness to this vintage butternut cupcake recipe, made complete with the perfect mix of treats.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Hennessy Colada', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/buttercream.jpg', unit_size: '8', description: 'Layered chocolate and vanilla cake, topped with our made from scratch chocolate ganache and a twist of Bailey buttercream makes this cupcake a winner.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Vanilla Blanco Frosted Pineapple',  category: 'Cupcakes', alcohol: false, image: '/images/cupcakes/vanilla.jpg', unit_size: '10', description: 'Pineapple adds fruity sweetness to this vintage banana-nut spice cake recipe, made complete with the perfect', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Frosted Buttercream', category: 'Cupcakes', alcohol: false, image: '/images/cupcakes/colada.jpg', unit_size: '9', description: 'Extra fruity sweetness to this vintage butternut cupcake recipe, made complete with the perfect mix of treats.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Rasberry-Flavored Choclolate Covered Strawberries', category: 'Strawberries', alcohol: false, image: '/images/strawberries/rasberry_flavored_strawberries.jpg', unit_size: '9', description: 'Extra fruity sweetness to chocolate delight, made complete with the perfect mix of treats.', dietary_restrictions: 'nut-free, gluten-free', price: 250, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Sunshine Upside Down Pineapple', category: 'Cakes', alcohol: false, image: '/images/cakes/uppineapplecake.jpg', unit_size: '8', description: 'Layered chocolate and vanilla cake, topped with our made from scratch chocolate ganache and a twist of Bailey buttercream makes this cupcake a winner.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' }
    ], {});
  }
};


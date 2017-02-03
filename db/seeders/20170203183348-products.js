'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      { product_name: 'Vanilla Blanco Frosted Ciroc Pineapple',  category: 'Cupcakes', alcohol: true, image: '/images/vanilla.jpg', unit_size: '10', description: 'Pineapple adds fruity sweetness to this vintage banana-nut spice cake recipe, made complete with the perfect', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Frosted Buttercream Hennessey', category: 'Cupcakes', alcohol: true, image: '/images/colada.jpg', unit_size: '9', description: 'Extra fruity sweetness to this vintage butternut cupcake recipe, made complete with the perfect mix of treats.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Hennessy Colada', category: 'Cupcakes', alcohol: true, image: '/images/buttercream.jpg', unit_size: '8', description: 'Layered chocolate and vanilla cake, topped with our made from scratch chocolate ganache and a twist of Bailey buttercream makes this cupcake a winner.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Vanilla Blanco Frosted Pineapple',  category: 'Cupcakes', alcohol: false, image: '/images/vanilla.jpg', unit_size: '10', description: 'Pineapple adds fruity sweetness to this vintage banana-nut spice cake recipe, made complete with the perfect', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Frosted Buttercream', category: 'Cupcakes', alcohol: false, image: '/images/colada.jpg', unit_size: '9', description: 'Extra fruity sweetness to this vintage butternut cupcake recipe, made complete with the perfect mix of treats.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { product_name: 'Golden Sunshine', category: 'Cupcakes', alcohol: false, image: '/images/buttercream.jpg', unit_size: '8', description: 'Layered chocolate and vanilla cake, topped with our made from scratch chocolate ganache and a twist of Bailey buttercream makes this cupcake a winner.', dietary_restrictions: 'nut-free', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' }
    ], {});
  }
};


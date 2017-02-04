'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      { productName: 'Honey Jack-Attack', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/vanilla.jpg', unitSize: '10', description: 'Honey-flavored whiskey adds a sweet taste to a classic fluffy, yellow cupcake', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Golden Frosted Buttercream Hennessey', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/colada.jpg', unitSize: '9', description: 'Yellow cake topped with our made from scratch creamy and fluffy buttercream frosting made complete with Henny infusion adds something to a crowd-favorite.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Patron-a-Rita (lemon or lime)', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/buttercream.jpg', unitSize: '8', description: 'This tequila infused treat can be made with lemon or lime. It can be topped with a salted or sugared lime wedge. Patron Infused.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Henny Upside Down Pineapple', category: 'Cakes', alcohol: true, image: '/images/cakes/uppineapplecake.jpg', unitSize: '8', description: 'A boozy twist on a classic Southern dessert baked with Henny Cognac topped with pineapples infused with Ciroc Vodka and maraschino cherries. We also have a cupcake version.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: '99 Banana Split', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/buttercream.jpg', unitSize: '8', description: 'Yummy vanilla cupcake infused with 99 proof banana liqueur. Get the banana with no peel!', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Sangria Brunch', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/buttercream.jpg', unitSize: '8', description: 'Fresh strawberries mixed with exotic sangria create this brunch inspired dessert.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Vanilla Blanco Frosted Pineapple', category: 'Cupcakes', alcohol: false, image: '/images/cupcakes/vanilla.jpg', unitSize: '10', description: 'Pineapple adds fruity sweetness to this yellow cupcake recipe, made complete with vanilla frosting', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Golden Frosted Buttercream', category: 'Cupcakes', alcohol: false, image: '/images/cupcakes/colada.jpg', unitSize: '9', description: 'Modern take to this vintage butternut cupcake recipe.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Rasberry-Flavored Choclolate Covered Strawberries', category: 'Strawberries', alcohol: false, image: '/images/strawberries/rasberry_flavored_strawberries.jpg', unitSize: '9', description: 'Extra fruity sweetness to a white chocolate delight, made complete with these perfect mix of treats.', dietaryRestrictions: 'nut-free, gluten-free, vegetarian', price: 250, createdAt: '2017-01-31', updatedAt: '2017-01-31' }
    ], {});
  }
};


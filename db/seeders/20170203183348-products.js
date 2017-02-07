'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      { productName: 'Honey Jack-Attack', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/whiskey.jpg', unitSize: '12', description: 'Honey-flavored whiskey adds a sweet taste to a classic fluffy, yellow cupcake', dietaryRestrictions: 'vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Golden Frosted Buttercream Hennessey', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/golden1.jpg', unitSize: '12', description: 'Yellow cake topped with our made from scratch creamy and fluffy buttercream frosting made complete with Henny infusion adds something to a crowd-favorite.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Patron-a-Rita (lemon or lime)', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/limemargcc.jpg', unitSize: '12', description: 'This tequila infused treat can be made with lemon or lime. It can be topped with a salted or sugared lime wedge. Patron Infused.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Henny Upside Down Pineapple', category: 'Cakes', alcohol: true, image: '/images/cakes/uppineapplecake.jpg', unitSize: '1', description: 'A boozy twist on a classic Southern dessert baked with Henny Cognac topped with pineapples infused with Ciroc Vodka and maraschino cherries. We also have a cupcake version.', dietaryRestrictions: 'nut-free, vegetarian', price: 4000, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Bey Lemonade', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/lemonh.jpg', unitSize: '12', description: 'Lemon cake infused with authentic Puerto Rican rum topped with a tangy Lemon Head candy.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: '99 Banana Split', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/99ban.jpg', unitSize: '12', description: 'Yummy vanilla cupcake infused with 99 proof banana liqueur. Get the banana with no peel!', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Sangria Brunch', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/Strawcc.jpg', unitSize: '12', description: 'Fresh strawberries mixed with exotic sangria create this brunch inspired dessert.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Henny Samoa', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/samoa.jpg', unitSize: '12', description: 'Hennessy Infused Cupcake w/ a yummy Samoa cookie baked inside', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Salty Caramel', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/pecan.jpg', unitSize: '12', description: 'Caramel Southern Comfort infused pecan cupcakes topped with crumbled pretzels & Caramel.', dietaryRestrictions: 'vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Ciroc Caramel Apple Martini', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/greenmart.jpg', unitSize: '12', description: 'The classic Apple martini cocktail embodied in a cupcake and drizzled with gooey Caramel!', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Strawberry Dream Margarita', category: 'Cakes', alcohol: true, image: '/images/cakes/Strawcake.jpg', unitSize: '1', description: 'Tequila Infused Strawberry cake with a refreshing Margarita twist. We also have a cupcake version.', dietaryRestrictions: 'nut-free, vegetarian', price: 4000, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Purple monster (Grand Marnier)', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/grandmar.jpg', unitSize: '12', description: 'Orange Cognac Infused into spiked berry filled cupcake.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Cotton Candy Bleu', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/bluerainbow.jpg', unitSize: '12', description: 'Blue velvet cupcakes Infused with Rum topped with Neon Pink frosting and Real Cotton Candy.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Death By Chocolate', category: 'Cakes', alcohol: true, image: '/images/cakes/cococake.jpg', unitSize: '1', description: 'Cognac infused butter cake with a delectable Fudge center, hand dipped in dark chocolate and covered in Milk chocolate frosting. We also have a cupcake version.', dietaryRestrictions: 'nut-free, vegetarian', price: 4000, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Vanilla Blanco Frosted Pineapple', category: 'Cupcakes', alcohol: true, image: '/images/cupcakes/swordb2cc.jpg', unitSize: '12', description: 'Pineapple adds fruity sweetness to this yellow cupcake recipe, made complete with vanilla frosting', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Golden Frosted Buttercream', category: 'Cupcakes', alcohol: false, image: '/images/cupcakes/assortedcc4.jpg', unitSize: '12', description: 'Modern take to this vintage cupcake recipe.', dietaryRestrictions: 'nut-free, vegetarian', price: 350, createdAt: '2017-01-31', updatedAt: '2017-01-31' },
      { productName: 'Strawberries Covered in Raspberry-Flavored Choclolate', category: 'Strawberries', alcohol: false, image: '/images/strawberries/rasberry_flavored_strawberries.jpg', unitSize: '9', description: 'Extra fruity sweetness to a white chocolate delight, made complete with these perfect mix of treats.', dietaryRestrictions: 'nut-free, gluten-free, vegetarian', price: 250, createdAt: '2017-01-31', updatedAt: '2017-01-31' }
    ], {});
  }
};

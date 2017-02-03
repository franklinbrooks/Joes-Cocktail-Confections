'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    product_name: DataTypes.STRING(255),
    category: DataTypes.STRING(255),
    alcohol: DataTypes.BOOLEAN,
    image: DataTypes.STRING(255),
    unit_size: DataTypes.BIGINT,
    description: DataTypes.TEXT,
    dietary_restrictions: DataTypes.STRING(150),
    price: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Product;
};
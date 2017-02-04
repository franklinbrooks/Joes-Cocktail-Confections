'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    productName: DataTypes.STRING(255),
    category: DataTypes.STRING(255),
    alcohol: DataTypes.BOOLEAN,
    image: DataTypes.STRING(255),
    unitSize: DataTypes.BIGINT,
    description: DataTypes.TEXT,
    dietaryRestrictions: DataTypes.STRING(150),
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
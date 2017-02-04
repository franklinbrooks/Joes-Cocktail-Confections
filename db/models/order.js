'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    userId: DataTypes.BIGINT,
    productId: DataTypes.BIGINT,
    quantity: DataTypes.BIGINT,
    deliveryDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};
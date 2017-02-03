'use strict';
module.exports = function(sequelize, DataTypes) {
  var Orders = sequelize.define('Orders', {
    user_id: DataTypes.BIGINT,
    quantity: DataTypes.BIGINT,
    delivery_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Orders;
};
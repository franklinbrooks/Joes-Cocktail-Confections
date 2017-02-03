'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    user_name: DataTypes.STRING(255),
    password: DataTypes.TEXT,
    first_name: DataTypes.STRING(255),
    last_name: DataTypes.STRING(255),
    email: DataTypes.STRING(128),
    cell_number: DataTypes.BIGINT,
    dob: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
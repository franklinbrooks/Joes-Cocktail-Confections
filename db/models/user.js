'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(32),
      unique: true
  },
    password: DataTypes.TEXT,
    firstName: DataTypes.STRING(255),
    lastName: DataTypes.STRING(255),
    email: DataTypes.STRING(128),
    cellNumber: DataTypes.BIGINT,
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

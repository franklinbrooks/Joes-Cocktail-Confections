'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(32),
        unique: true
      },
      password: {
        type: Sequelize.TEXT
      },
      firstName: {
        type: Sequelize.STRING(255)
      },
      lastName: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(128)
      },
      cellNumber: {
        type: Sequelize.BIGINT
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};

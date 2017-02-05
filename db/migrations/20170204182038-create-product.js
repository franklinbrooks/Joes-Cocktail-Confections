'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING(255)
      },
      category: {
        type: Sequelize.STRING(255)
      },
      alcohol: {
        type: Sequelize.BOOLEAN
      },
      image: {
        type: Sequelize.STRING(255)
      },
      unitSize: {
        type: Sequelize.BIGINT
      },
      description: {
        type: Sequelize.TEXT
      },
      dietaryRestrictions: {
        type: Sequelize.STRING(150)
      },
      price: {
        type: Sequelize.BIGINT
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
    return queryInterface.dropTable('Products');
  }
};

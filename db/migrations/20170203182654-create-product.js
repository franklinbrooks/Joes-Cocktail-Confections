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
      product_name: {
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
      unit_size: {
        type: Sequelize.BIGINT
      },
      description: {
        type: Sequelize.TEXT
      },
      dietary_restrictions: {
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
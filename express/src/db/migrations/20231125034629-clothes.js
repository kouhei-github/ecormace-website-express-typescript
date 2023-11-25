'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clothes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      count: {
        type: Sequelize.INTEGER
      },

      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "brands",
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

      on_sale_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "on_sales",
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },

      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clothes');
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_shopping_cart_clothes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      clothe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "clothes",
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_shopping_cart_clothes');
  }
};

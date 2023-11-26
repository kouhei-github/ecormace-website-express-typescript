'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('image_clothes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "images",
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      cloth_id: {
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
    await queryInterface.dropTable('image_clothes');

  }
};

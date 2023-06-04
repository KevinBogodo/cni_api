'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("piece_type", {
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1234),
      },
    },
    {
      timestamps: true,
      updatedAt: 'updateTimestamp'
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("piece_type");
  }
};

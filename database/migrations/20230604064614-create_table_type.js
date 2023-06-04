'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("type_user", {
      
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
    queryInterface.dropTable("type_user");
  }
};

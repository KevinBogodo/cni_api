'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: { msg : 'Email already in use !' }
      },
      phone1: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: { msg : 'Phone already in use !' }
      },
      phone2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: { msg : 'Username already in use !' }
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,

      },
      town: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("users");
  }
};

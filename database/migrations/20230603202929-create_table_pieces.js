'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("pieces", {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      number: {
        type: Sequelize.BIGINT,
      },
      Pname: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'p_name'
      },
      Psurname: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'p_surname'
      },
      Ppicture: {
        type: Sequelize.STRING,
        field: 'p_picture'
      },
      Ppicture2: {
          type: Sequelize.STRING,
          field: 'p_picture_2'
      },
      Pphone: {
        type: Sequelize.BIGINT,
        field: 'p_phone'
      },
      typeId: {
        type: Sequelize.INTEGER,
        field: 'type_id',
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      Fphone: {
        type: Sequelize.BIGINT,
        field: 'f_phone'
      },
      Fphone2: {
        type: Sequelize.BIGINT,
        field: 'f_phone_2'
      },
      Fsurname: {
        type: Sequelize.STRING,
        field: 'f_surname'
      },
      UserId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
      },
      withdrawalAt:{
        type: Sequelize.DATE,
        field: 'withdrawal_at',
      },
    },
    {
      timestamps: true,
      updatedAt: 'updateTimestamp'
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("pieces");
  }
};

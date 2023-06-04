const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../database/connexion');
const TypeUser = require('./TypeUser');

const User = sequelize.define('User', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg : 'Email already in use !' },
        validate: {
          isEmail: { msg: 'Enter valid email.' },
          notNull: { msg: 'The email is a required property.' }
        }
      },
      emailVerifiedAt: {
        type: DataTypes.DATE,
        field: 'email_verified_at',
      },
      phone1: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: { msg : 'Phone already in use !' },
        validate: {
            isInt: { msg: 'Only number can be use for phone.' },
            notNull: { msg: 'status is a required property.' },
            min: {
                args: [9],
                msg: 'Cannot be less 9 characters'
            },
            // max: {
            //     args : [15],
            //     msg: ' Phone number cannot exceed 15 characters'
            // }
        }
      },
      phone2: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      phone3: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg : 'Username already in use !' }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      town: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  },
  {
    timestamps: true,
    updatedAt: 'updateTimestamp'
});

// User.belongsTo(TypeUser, { foreignKey: {  name: 'typeId' } });
module.exports = User;
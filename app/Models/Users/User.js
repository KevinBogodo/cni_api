const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../database/connexion');

module.exports = sequelize.define('User', {
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
            max: {
                args : [13],
                msg: 'Cannot exceed 13 characters'
            },
            min: {
                args: [9],
                msg: 'Cannot be less 9 characters'
            }
        }
      },
      phone2: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            isInt: { msg: 'Only number can be use for phone.' },
            max: {
                args : [13],
                msg: 'Cannot exceed 13 characters'
            },
            min: {
                args: [9],
                msg: 'Cannot be less 9 characters'
            }
        }
      },
      phone3: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            isInt: { msg: 'Only number can be use for phone.' },
            max: {
                args : [13],
                msg: 'Cannot exceed 13 characters'
            },
            min: {
                args: [9],
                msg: 'Cannot be less 9 characters'
            }
        }
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
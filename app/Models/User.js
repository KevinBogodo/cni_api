const Sequelize = require("sequelize");

module.exports = sequelize.define('User', {
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
        unique: { msg : 'Email already in use !' },
        validate: {
          isEmail: { msg: 'Enter valid email.' },
          notNull: { msg: 'The email is a required property.' }
        }
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
});
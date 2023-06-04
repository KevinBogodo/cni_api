const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../database/connexion');

const TypeUser = sequelize.define('TypeUser', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'The name cant not be empty.' },
                notNull: { msg: 'The name is a required property.' }
            }
        },
        description: {
            type: DataTypes.STRING(1234),
        },
    },
    { 
        tableName: 'type_user',
        timestamps: true,
        updatedAt: 'updateTimestamp'
    }
);

module.exports = TypeUser; 
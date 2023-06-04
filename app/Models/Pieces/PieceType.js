const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../database/connexion');

module.exports =  sequelize.define('PieceType', {
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
        tableName: 'piece_type',
        timestamps: true,
        updatedAt: 'updateTimestamp'
    }
);
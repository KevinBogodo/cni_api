const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../../database/connexion');

const PieceType = require('./PieceType');
const User = require('../Users/User');

module.exports =  sequelize.define('Piece', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: DataTypes.BIGINT,
        },
        Pname: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'p_name',
            validate: {
                notNull: { msg: 'The name is a required property.' },
            }
        },
        Psurname: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'p_surname',
            validate: {
                notNull: { msg: 'The surname is a required property.' },
            }
        },
        Ppicture: {
            type: DataTypes.STRING,
            field: 'p_picture',
            validate: {
                isUrl: { msg: 'Only url can be use for store picture.' }
            }
        },
        Ppicture2: {
            type: DataTypes.STRING,
            field: 'p_picture_2',
            validate: {
                isUrl: { msg: 'Only url can be use for store picture.' }
            }
        },
        Pphone: {
            type: DataTypes.BIGINT,
            field: 'p_phone',
        },
        typeId: {
            type: DataTypes.INTEGER,
            field: 'type_id',
            references: {
            model: PieceType,
            key: 'id'
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'city is a required property.' },
            }
        },
        street: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isInt: { msg: 'Only number can be use for status.' },
                notNull: { msg: 'status is a required property.' },
                max: {
                    args : [4],
                    msg: 'Cannot exceed 4'
                },
                min: {
                    args: [0],
                    msg: 'Cannot be less 0'
                } 
            }
        },
        Fphone: {
            type: DataTypes.BIGINT,
            field: 'f_phone',
            allowNull: false,
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
        Fphone2: {
            type: DataTypes.BIGINT,
            field: 'f_phone_2',
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
        Fsurname: {
            type: DataTypes.STRING,
            field: 'f_surname',
        },
        UserId: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            references: {
            model: User,
            key: 'id'
            }
        },
        withdrawalAt:{
            type: DataTypes.DATE,
            field: 'withdrawal_at',
        },
    },
    {
      timestamps: true,
      updatedAt: 'updateTimestamp'
});
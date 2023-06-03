const Sequelize = require("sequelize");

let sequelize

if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize('mksrrgws_node_test', 'mksrrgws_node', 'Node_test_2023', {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT+1',
        },
        logging: true
    })
} else {
    sequelize = new Sequelize('pokes', 'root', '', {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT+1',
        },
        logging: false
    })
}

module.exports = sequelize;
global.sequelize = sequelize
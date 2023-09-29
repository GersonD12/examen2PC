'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await QueryInterface.createTable('orden', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,   
                type: Sequelize.INTEGER
            },
            nombre_cliente: {
                type: sequelize.STRING,
                allowNull: false,
            },
            total: {
                type: sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (QueryInterface, Sequelize) => {
        await QueryInterface.dropTable('orden')
    }
};
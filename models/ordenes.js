'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class orden extends Model {};
    orden.init({
        nombre_cliente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, 
    {
        sequelize,
        modelName: 'orden',
    });
    return orden;
};
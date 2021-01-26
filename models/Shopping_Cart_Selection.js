// use Sequelize's Model class
const { Model, DataTypes } = require('sequelize');
// this points to the file where Sequelize creates the DB connection
const sequelize = require('../config/connection');

// create our User model, which extends Sequelize's Model class in order to inherit all its methods
class Shopping_Cart_Selection extends Model {}

Shopping_Cart_Selection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sale_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'sale',
              key: 'id'
            }
        },
        instrument_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'instrument',
              key: 'id'
            }
        },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'shopping_cart_selection'
    }
);

module.exports = Shopping_Cart_Selection;
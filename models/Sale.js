// use Sequelize's Model class
const { Model, DataTypes } = require('sequelize');
// this points to the file where Sequelize creates the DB connection
const sequelize = require('../config/connection');

// create our User model, which extends Sequelize's Model class in order to inherit all its methods
class Sale extends Model {}

Sale.init(
    {
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // user making the purchase
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        // price of all items in the shopping cart
        sum_price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'sale'
    }
);

module.exports = Sale;
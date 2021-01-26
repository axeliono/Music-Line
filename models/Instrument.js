// use Sequelize's Model class
const { Model, DataTypes } = require('sequelize');
// this points to the file where Sequelize creates the DB connection
const sequelize = require('../config/connection');

// create our User model, which extends Sequelize's Model class in order to inherit all its methods
class Instrument extends Model {}

Instrument.init(
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
        // instrument's name
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // instrument's classification
        ////// add foreign key stuff
        classification_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'classification',
                key: 'id'
            }
        },
        // instrument's origin
        origin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // instrument's manufacturer
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // instrument's price
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instrument'
    }
);

module.exports = Instrument;
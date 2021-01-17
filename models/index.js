/////////// this file is for collecting and exporting the various models data

const Instrument = require("./Instrument");
const User = require("./User");
const Sale = require("./Sale");
const Shopping_Cart_Selection = require("./Shopping_Cart_Selection");

// add association logic here:

// Sale to User Association (one to many)
// Each Sale has only 1 user_id
// 1 user_id can have many sales
Sale.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Sale, {
    foreignKey: 'user_id'
});


// Instruments to Shopping_Cart_Selection_Items Association (one to many)
// 1 Shopping_Cart_Selection can have 1 instrument
// instrument can be in many Shopping_Cart_Selection_items
Shopping_Cart_Selection.belongsTo(Instrument, {
    foreignKey: 'instrument_id'
});

Instrument.hasMany(Shopping_Cart_Selection, {
    foreignKey: 'instrument_id'
});


// Sales to Shopping_Cart_Selections Association (one to many)
// Each shopping cart item is partr of only 1 sale
// Each sale can have multiple shopping cart items
Shopping_Cart_Selection.belongsTo(Sale, {
    foreignKey: 'sale_id'
});

Sale.hasMany(Shopping_Cart_Selection, {
    foreignKey: 'sale_id'
});








module.exports = { Instrument, User, Sale, Shopping_Cart_Selection };
const { Shopping_Cart_Selection } = require('../models');

const shoppingCartData = [
  {
    sale_id: 1,
    instrument_id: 6
  },
  {
    sale_id: 1,
    instrument_id: 12
  },
  {
    sale_id: 2,
    instrument_id: 10
  },
  {
    sale_id: 3,
    instrument_id: 3
  },

];

const seedShoppingCart = () => Shopping_Cart_Selection.bulkCreate(shoppingCartData);

module.exports = seedShoppingCart;
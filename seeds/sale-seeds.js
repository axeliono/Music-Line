const { Sale } = require('../models');

const saleData = [
  {
    user_id: 1,
    sum_price: 350
  },
  {
    user_id: 2,
    sum_price: 9000
  },
  {
    user_id: 1,
    sum_price: 900
  },

];

const seedSale = () => Sale.bulkCreate(saleData);

module.exports = seedSale;
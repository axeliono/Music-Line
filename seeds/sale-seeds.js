const { Sale } = require('../models');

const saleData = [
  {
    user_id: 1
  },
  {
    user_id: 2
  },
  {
    user_id: 1
  },

];

const seedSale = () => Sale.bulkCreate(saleData);

module.exports = seedSale;
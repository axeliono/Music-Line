const seedClassifications = require('./classification-seeds');
const seedInstruments = require('./instrument-seeds');
const seedSales = require('./sale-seeds');
const seedShoppingCart = require('./shopping-cart-seeds');
const userSeeds = require('./user-seeds.js')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await userSeeds();
  console.log('\n----- USERS SEEDED -----\n');

  await seedClassifications();
  console.log('\n----- CLASSIFICATIONS SEEDED -----\n');

  await seedInstruments();
  console.log('\n----- INSTRUMENTS SEEDED -----\n');

  await seedSales();
  console.log('\n----- SALES SEEDED -----\n');

  await seedShoppingCart();
  console.log('\n----- SHOPPING CART SELECTIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
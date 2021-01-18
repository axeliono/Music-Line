const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const classificationRoutes = require('./classification-routes');
const saleRoutes = require('./sale-routes');
const instrumentRoutes = require('./instrument-routes');
const shoppingCartRoutes = require('./shopping_cart_selection-routes');

router.use('/users', userRoutes);

module.exports = router;
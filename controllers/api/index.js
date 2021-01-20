const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const classificationRoutes = require("./classification-routes");
const saleRoutes = require("./sale-routes");
const instrumentRoutes = require("./instrument-routes");
const shoppingCartRoutes = require("./shopping-routes");

router.use("/users", userRoutes);
router.use("/classification", classificationRoutes);
router.use("/sale", saleRoutes);
router.use("/instrument", instrumentRoutes);
router.use("/shopping", shoppingCartRoutes);

module.exports = router;

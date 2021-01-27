const { Sale, Instrument, User } = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

//GET all Sales
router.get("/", (req, res) => {
  Sale.findAll({
    attributes: ["id", "sum_price", "created_at"]
  })
    .then((dbSaleData) => {
      res.json(dbSaleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", withAuth, (req, res) => {
  Sale.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "sum_price", "created_at"]
  })
    .then((dbSaleData) => {
      if (!dbSaleData) {
        res.status(404).json({ message: "no Sale found with this id" });
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create new Sale
router.post("/", withAuth, (req, res) => {
  Sale.create({
    sum_price: req.body.price,
    user_id: req.session.user_id
  })
    .then((dbSaleData) => {
      req.session.sale = dbSaleData.id;
      console.log(req.session.sale);
      res.json(dbSaleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//Delete Sale
router.delete("/:id", withAuth, (req, res) => {
  Sale.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbSaleData) => {
      if (!dbSaleData) {
        res.status(404).json({ message: "No Sale found with this id" });
        return;
      }

      res.json(dbSaleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

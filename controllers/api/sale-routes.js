const { Sale, Instrument, User } = require("../../models");
const withAuth = require('../../utils/auth');
const router = require("express").Router();

//GET all Sales
router.get("/", (req, res) => {
  Sale.findAll({
    attributes: [
      'id',
      'sum_price',
      'created_at'
    ],
    include: [
      {
      model: Instrument,
      attributes: ['id', 'name', 'origin', 'manufacturer', 'price']
      },
      {
      model: User,
      attributes: ['username']
      }
    ]
  })
    .then((dbSaleData) => {
      res.json(dbSaleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Sale.findOne({
    //input attributes later if needed
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'sum_price',
      'created_at'
    ],
    include: [
      {
      model: Instrument,
      attributes: ['id', 'name', 'origin', 'manufacturer', 'price']
      },
      {
      model: User,
      attributes: ['username']
      }
    ]
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
router.post("/", (req, res) => {
  Sale.create({
    sum_price: req.body.sum_price,
    user_id: req.body.user_id,
  })
    .then((dbSaleData) => {
      res.json(dbSaleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//Delete Sale
router.delete("/:id", (req, res) => {
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

const {
  Shopping_Cart_Selection,
  Sale,
  Instrument,
  User,
  Classification,
} = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

router.get("/:id", withAuth, (req, res) => {
  Shopping_Cart_Selection.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Shopping_Cart_Selection,
      attributes: ["id"],
      include: [
        {
          model: Sale,
          attributes: ["sum_price"],
        },
        {
          model: Instrument,
          attributes: ["name", "origin", "manufacturer", "price"],
          include: {
            model: Classification,
            attributes: ["name"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    },
  })
    .then((dbShopData) => {
      if (!dbShopData) {
        res
          .status(404)
          .json({ message: "no shopping cart found with this id" });
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create new Shopping_Cart_Selection
router.post("/", withAuth, (req, res) => {
  Shopping_Cart_Selection.create({
    sale_id: req.body.sale_id,
    instrument_id: req.body.instrument_id,
  })
    .then((dbShopData) => {
      res.json(dbShopData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//Delete Shopping_Cart_Selection
router.delete("/:id", withAuth, (req, res) => {
  Shopping_Cart_Selection.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbShopData) => {
      if (!dbShopData) {
        res
          .status(404)
          .json({ message: "No Shopping_Cart_Selection found with this id" });
        return;
      }

      res.json(dbShopData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

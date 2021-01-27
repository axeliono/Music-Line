const {
  Shopping_Cart_Selection,
  Sale,
  Instrument,
  User,
  Classification,
} = require("../../models");
const withAuth = require("../../utils/auth");
const router = require("express").Router();

router.get("/", (req, res) => {
  Shopping_Cart_Selection.findAll({
    attributes: ["id"],
    include: {
      model: Instrument,
      attributes: ["id", "name", "origin", "manufacturer", "price"],
        include: {
          model: Classification,
          attributes: ["name"],
        },
    }
  })
    .then((dbSaleData) => {
      res.json(dbSaleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/myCart", (req, res) => {
  Shopping_Cart_Selection.findAll({
    where: {
      sale_id: req.session.saleId,
    },
    attributes: ["id"],
    include: {
        model: Instrument,
        attributes: ["id", "name", "origin", "manufacturer", "price"],
          include: {
            model: Classification,
            attributes: ["name"],
          },
      }
    })
    .then((dbSaleData) => {
      res.json(dbSaleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create new Shopping_Cart_Selection
router.post("/", (req, res) => {
  Shopping_Cart_Selection.create({
    sale_id: req.session.saleId,
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

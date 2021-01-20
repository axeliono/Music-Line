const { Shopping_Cart_Selection } = require("../../models");

const router = require("express").Router();

//GET all Shopping_Cart_Selections
router.get("/", (req, res) => {
  Shopping_Cart_Selection.findAll({
    //input attributes later if needed
  })
    .then((dbShopData) => {
      res.json(dbShopData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Shopping_Cart_Selection.findOne({
    //input attributes later if needed
    where: {
      id: req.params.id,
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
router.post("/", (req, res) => {
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
router.delete("/:id", (req, res) => {
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

const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  Classification,
  Instrument,
  Shopping_Cart_Selection,
} = require("../models");

router.get("/", (req, res) => {
  console.log("======================");
  Classification.findAll({
    attributes: ["name"],
  })
    .then((dbClassData) => {
      const classes = dbClassData.map((classif) =>
        classif.get({ plain: true })
      );

      res.render("home-page", classes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//For logging in from homepage
router.get("/login", (req, res) => {
  res.render("login");
});

// router.get("/shop/:category", (req, res) => {
//   Instrument.findAll({
//     where: {
//       category: req.params.category,
//     },
//     attributes: ["id", "name", "origin", "manufacturer", "price"],
//     include: {
//       model: Classification,
//       attributes: ["name"],
//     },
//   })
//     .then((dbInstrumentData) => {
//       const instruments = dbInstrumentData.map((instrument) =>
//         instrument.get({ plain: true })
//       );
//       res.render("shop-category", { instruments });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get("/shop", (req, res) => {
  Instrument.findAll({
    attributes: [
      "id",
      "name",
      "classification_id",
      "origin",
      "manufacturer",
      "price",
      "image_path",
    ],
    include: {
      model: Classification,
      attributes: ["name"],
    },
  })
    .then((dbInstrumentData) => {
      const instruments = dbInstrumentData.map((instrument) =>
        instrument.get({ plain: true })
      );
      res.render("shop", { instruments });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/shop/:id", (req, res) => {
  Instrument.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "name",
      "classification_id",
      "origin",
      "manufacturer",
      "price",
      "image_path",
    ],
    include: {
      model: Classification,
      attributes: ["name"],
    },
  })
    .then((dbInstrumentData) => {
      if (!dbInstrumentData) {
        res.status(404).json({ message: "No instrument found with this id" });
        return;
      }

      const instrument = dbInstrumentData.get({ plain: true });
      res.render("single-instrument", { instrument });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/shop/category/:id", (req, res) => {
  Instrument.findAll({
    where: {
      classification_id: req.params.id,
    },
    attributes: [
      "id",
      "name",
      "classification_id",
      "origin",
      "manufacturer",
      "price",
      "image_path",
    ],
    include: {
      model: Classification,
      attributes: ["name"],
    },
  })
    .then((dbInstrumentData) => {
      const instruments = dbInstrumentData.map((instrument) =>
        instrument.get({ plain: true })
      );
      res.render("shop-category", { instruments });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/shopping-cart/:id", (req, res) => {
  Shopping_Cart_Selection.findAll({
    where: {
      user_id: req.session.user_id,
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
      const items = dbShopData.map((cartItems) => {
        cartItems.get({ plain: true });
      });
      res.render("shopping-cart", { items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;

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
      res.render("shop-category", { instruments });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// render login page when icon clicked in header
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/account");
    return;
  }
  res.render("login");
});

// render shop all instruments
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

// render single instrument based on id
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

// render all instruments by category selected
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

// render contact us section
router.get("/contact", (req, res) => {
  res.render("contact");
});

// render shopping cart page when icon is clicked in header
router.get("/shopping-cart", (req, res) => {});

module.exports = router;

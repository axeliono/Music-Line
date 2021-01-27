const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  Classification,
  Instrument,
  User,
  Shopping_Cart_Selection,
  Sale,
} = require("../models");
const withAuth = require("../utils/auth");
const state = {
  userData: "",
  saleData: "",
};

router.get("/", (req, res) => {
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

router.get("/shopping-cart", withAuth, (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  Shopping_Cart_Selection.findAll({
    where: {
      sale_id: req.session.sale,
    },
    include: [
      {
        model: Instrument,
        attributes: ["name", "origin", "manufacturer", "price"],
        include: {
          model: Classification,
          attributes: ["name"],
        },
      },
    ],
  })
    .then((dbShopData) => {
      const items = dbShopData.map((item) => item.get({ plain: true }));
      res.render("shopping-cart", { items });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// render login page when icon clicked in header
router.get("/login", (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
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

module.exports = router;

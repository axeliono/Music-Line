const router = require("express").Router();
const { Classification } = require("../models");

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
  if (req.session.loggedIn) {
    res.redirect("/account");
    return;
  }
  res.render("login");
});
router.get("/shop/:category", (req, res) => {
  Instrument.findAll({
    where: {
      category: req.params.category,
    },
    attributes: ["id", "name", "origin", "manufacturer", "price"],
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
router.get("/shop", (req, res) => {
  Instrument.findAll({
    attributes: ["id", "name", "origin", "manufacturer", "price"],
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
module.exports = router;

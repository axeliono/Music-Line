const router = require("express").Router();
const sequelize = require('../config/connection');
const { Classification, Instrument, User } = require("../models");


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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/shopping-cart', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('shopping-cart');
});

router.get("/shop", (req, res) => {
  Instrument.findAll({
      attributes: ["id", "name", "classification_id", "origin", "manufacturer", "price", "image_path"],
      include: {
        model: Classification,
        attributes: ["name"],
      }
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

router.get('/shop/:id', (req, res) => {
  Instrument.findOne({
    where: {
      id: req.params.id
    },
    attributes: ["id", "name", "classification_id", "origin", "manufacturer", "price", "image_path"],
    include: {
      model: Classification,
      attributes: ["name"],
    }
  })
  .then(dbInstrumentData => {
    if (!dbInstrumentData) {
      res.status(404).json({ message: 'No instrument found with this id' });
      return;
    }

    const instrument = dbInstrumentData.get({ plain: true });
    res.render('single-instrument', { instrument });
  }) 
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/shop/category/:id', (req, res) => {
  Instrument.findAll({
    where: {
      classification_id: req.params.id
    },
    attributes: ["id", "name", "classification_id", "origin", "manufacturer", "price", "image_path"],
    include: {
      model: Classification,
      attributes: ["name"],
    }
  })
  .then(dbInstrumentData => {
    const instruments = dbInstrumentData.map((instrument) =>
        instrument.get({ plain: true })
      );
      res.render("shop-category", { instruments });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

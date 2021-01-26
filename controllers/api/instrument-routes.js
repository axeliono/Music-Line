const { Instrument, Classification } = require("../../models");
const router = require("express").Router();

//GET all Instruments
router.get("/", (req, res) => {
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
      res.render("shop", { instruments });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Instrument.findOne({
    attributes: ["id", "name", "origin", "manufacturer", "price"],
    include: {
      model: Classification,
      attributes: ["name"],
    },
    where: {
      id: req.params.id,
    },
  })
    .then((dbInstrumentData) => {
      if (!dbInstrumentData) {
        res.status(404).json({ message: "no Instrument found with this id" });
        return;
      }
      res.json(dbInstrumentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create new Instrument
router.post("/", (req, res) => {
  Instrument.create({
    name: req.body.name,
    classification_id: req.body.classification_id,
    origin: req.body.origin,
    price: req.body.price,
    manufacturer: req.body.manufacturer,
  })
    .then((dbInstrumentData) => {
      res.json(dbInstrumentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//Delete Instrument
router.delete("/:id", (req, res) => {
  Instrument.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbInstrumentData) => {
      if (!dbInstrumentData) {
        res.status(404).json({ message: "No Instrument found with this id" });
        return;
      }

      res.json(dbInstrumentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

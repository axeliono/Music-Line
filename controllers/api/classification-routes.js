const router = require("express").Router();
const Classification = require("../../models/Classification");

//GET all classifications
router.get("/", (req, res) => {
  Classification.findAll({
    //input attributes later if needed
  })
    .then((dbClassData) => {
      res.json(dbClassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Classification.findOne({
    //input attributes later if needed
    where: {
      id: req.params.id,
    },
  })
    .then((dbClassData) => {
      if (!dbClassData) {
        res
          .status(404)
          .json({ message: "no Classification found with this id" });
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create new classification
router.post("/", (req, res) => {
  Classification.create({
    name: req.body.name,
  })
    .then((dbClassData) => {
      res.json(dbClassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//Delete classification
router.delete("/:id", (req, res) => {
  Classification.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbClassData) => {
      if (!dbClassData) {
        res
          .status(404)
          .json({ message: "No classification found with this id" });
        return;
      }

      res.json(dbClassData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

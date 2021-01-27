const router = require("express").Router();

router.get("/", (req, res) => {
  const data = req.session;

  res.json(data);
});

module.exports = router;

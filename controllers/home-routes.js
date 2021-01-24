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

      res.render("main", classes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//we may want to remove this since there is another login route (unsure which one we need or if we need both)
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//we may not need this if we want people to be able sign up even if someone is logged in
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

//For logging in from homepage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/account");
    return;
  }
  res.render("login");
});
module.express = router;

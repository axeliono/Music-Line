const router = require("express").Router();

//For logging in from homepage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/account");
    return;
  }
  res.render("login");
});
module.express = router;

const router = require("express").Router();
const {
  User,
  Instrument,
  Sale,
  Shopping_Cart_Selection,
  Classification,
} = require("../../models");
const withAuth = require("../../utils/auth");

//returns all user id's, names, and emails...exludes stored passwords
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//returns information about a single user, their sale's, instruments, and shopping cart selection information
router.get("/myCart", withAuth, (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Sale,
        attributes: ["id", "sum_price"],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates a new user with a body using username, email, password
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        req.session.sale = null;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//uses checkpassword function in user model to verify user login request and create a session
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    Sale.create({
      sum_price: 0,
      user_id: dbUserData.id,
    })
      .then((dbSaleData) => {
        console.log(req.session.sale);
        req.session.save(() => {
          req.session.user_id = dbSaleData.user_id;
          req.session.username = dbUserData.username;
          req.session.sale = dbSaleData.id;
          req.session.loggedIn = true;

          // res.json({ user: dbUserData, message: "You are now logged in!" });
          res.render("home-page", { sale, loggedIn });
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
});

//ends current session if user is logged in
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//updates user information if user would like to change email or password etc.
router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//deletes user from database
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

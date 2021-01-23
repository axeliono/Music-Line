const router = require("express").Router();
const { Classification } = require('../models');

router.get('/', (req, res) => {
    console.log('======================');
    Classification.findAll({
      attributes: ["name"]    
    })
      .then(dbClassData => {
        const classes = dbClassData.map(classif => classif.get({ plain: true }));
  
        res.render('main', classes);
      })
      .catch(err => {
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
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});

module.express = router;

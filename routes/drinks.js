var express = require('express');
var router = express.Router();

var Drink = require('../models/Drink');

router.get('/', (req, res) => {

  Drink.find().then((drinks) => {
    res.json(drinks);
  })

});

router.post('/', (req, res) => {

  if (req.body) {

    const name = req.body.name;
    const servingSize = req.body.servingSize;
    const caffeine = req.body.caffeine;

    Drink.create(name, servingSize, caffeine).then((drink) => {
      res.json(drink);
    }).catch((err) => {
      res.status(500).send(err);
    })

  } else {
    res.status().send('Missing parameters. Need name, serving size and caffeine');
  }

});

module.exports = router;

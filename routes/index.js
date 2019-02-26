const Restaurant = require('../sequelize');
var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
  Restaurant.findAll().then((restaurant) => {
    console.log('Restaurant', restaurant);
    res.json(restaurant);
  });
});

module.exports = router;

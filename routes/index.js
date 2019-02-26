var db  = require('../models/index.js');
var venues = require('../models').Restaurant;
var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res) {
  venues.findAll({}).then(function(restaurant) {
    console.log('Restaurant', restaurant);
    res.json(restaurant);
  });
});

module.exports = router;

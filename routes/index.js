var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  models.Restaurant.findAll({
    where: { id: req.params.userId }
  }).then(function(restaurant) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      restaurant: restaurant
    });
  });
});

module.exports = router;

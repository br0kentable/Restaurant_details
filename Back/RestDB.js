'use strict';

const Sequelize = require('sequelize');
const Seed = require('./Seeding');
var RestaurantModel = require('./RestModel')

var sequelize = new Sequelize('restaurants', 'root', 'root' {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

const Restaurant = RestaurantModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Dinner is served!!`)
  })

  module.exports = Restaurant;

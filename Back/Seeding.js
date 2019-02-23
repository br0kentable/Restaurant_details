'use strict';

const Sequelize = require('sequelize');
const db = require('./RestDB');
const model = require('./RestModel');
const data = require('./rest_test.json');

const seed = (data) => {
  model.bulkCreate(data);
}

seed()
.then(() => {
  process.exit();
})

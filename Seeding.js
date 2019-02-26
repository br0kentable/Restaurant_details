'use strict';

const db = require('./models/index');
const data = require('./rest_test.json');

const seed = (data) => {
  db.Restaurant.bulkInsert(data);
}

seed(data)
.then(() => {
  process.exit();
})

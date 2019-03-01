var mysql = require('mysql');

module.exports = mysql.createConnection({
  host:  'localhost',
  user: 'root',
  password: null,
  database: 'restaurant_details'
});
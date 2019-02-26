var express = require('express')
var http = require('http')
var createError = require('http-errors')
var path = require('path')

var bodyParser = require('body-parser');
var errorHandler = require('errorhandler')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("./dist"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : null,
  database : 'restaurant_details'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
});

app.get('/wild', function (req, res) {
  var queryStr = 'SELECT * FROM Restaurants ORDER BY RAND() LIMIT 1';
  connection.query(queryStr, function(error, results) {
    res.json(results[0]);
  });
});

app.set('view engine', 'pug');

app.set('port', process.env.PORT || 3001);

if (app.get('env') === 'development') {
  app.use(errorHandler())
};

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

var server = http.createServer(app);

server.listen(app.get('port'), () => {
    console.log('Server running on ' + app.get('port'))
});

module.exports = app;

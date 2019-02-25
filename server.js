var express = require('express')
var http = require('http')
var createError = require('http-errors')
// var routes = require('./routes')
// var user = require('./routes/user')
var path = require('path')
var indexRouter = require('./routes/index');

var bodyParser = require('body-parser');
var debug = require('debug')('app4')
var errorHandler = require('errorhandler')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("./dist"));
app.use('/', indexRouter);

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

const models = require('./models');

models.sequelize.sync({ force: true })
.then(() => {
  console.log(`Dinner is served!!`)
  var server = http.createServer(app)
  server.listen(app.get('port'), () => {
    console.log('Server running on ' + app.get('port'))
  });
})

app.get('/listings', (req, res) => {
  model.restaurant.findAll({
    where: {
      id: req.params.userId
    }
  }).then(restaurant => res.json(restaurant))
})

// var server = app.listen(app.get('port'), function () {
//   debug('Express server listening on port ' + server.address().port)
// });

module.exports = app;

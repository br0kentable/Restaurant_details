const express = require('express');
const bodyParser = require('body-parser');
const Restaurant = require('./RestDB')

const app = express()

app.use(bodyParser.json())

app.get('/listings', (req, res) => {
  Restaurant.findAll({
    where: {
      id: req.params.userId
    }
  }).then(restaurant => res.json(restaurant))
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
const Sequelize = require('sequelize');

const sequelize = new Sequelize('restaurant_details', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Restaurant = sequelize.define('Restaurant', {
  id: {type: Sequelize.STRING, primaryKey: true},
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  menuOne: Sequelize.TEXT,
  menuTwo: Sequelize.TEXT,
  menuThree: Sequelize.TEXT,
  menuFour: Sequelize.TEXT,
  menuFive: Sequelize.TEXT,
  cross_street: Sequelize.STRING,
  neighborhood: Sequelize.STRING,
  hours: Sequelize.STRING,
  cuisine: Sequelize.STRING,
  style: Sequelize.STRING,
  dress: Sequelize.STRING,
  parking: Sequelize.STRING,
  transit: Sequelize.STRING,
  payment: Sequelize.STRING,
  chef: Sequelize.STRING,
  details: Sequelize.STRING,
  url: Sequelize.STRING,
  phone: Sequelize.STRING,
  parties: Sequelize.STRING,
  party_contact: Sequelize.STRING,
  special: Sequelize.STRING
},
{
  freezeTableName: true,
  timestamps: false
});

sequelize.sync({force: false})
  .then(() => {
    console.log('Database and table created!')
  });

module.exports = Restaurant;

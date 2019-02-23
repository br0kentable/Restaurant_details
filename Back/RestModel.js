'use strict';

const sequelize = require('sequelize');
const db = require('./RestDB');

module.exports = (sequelize, type) => {
  sequelize.define('restaurant', {
    id: {
      type: type.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false
    },
    name: {
      type: type.STRING,
      allowNull: false
    },
    description: {
      type: type.TEXT
    },
    menuOne: {
      type: type.TEXT
    },
    menuTwo: {
      type: type.TEXT
    },
    menuThree: {
      type: type.TEXT
    },
    menuFour: {
      type: type.TEXT
    },
    menuFive: {
      type: type.TEXT
    },
    cross_street: {
      type: type.STRING
    },
    neighborhood: {
      type: type.STRING
    },
    hours: {
      type: type.STRING
    },
    cuisine: {
      type: type.STRING
    },
    style: {
      type: type.STRING
    },
    dress: {
      type: type.STRING
    },
    parking: {
      type: type.STRING
    },
    transit: {
      type: type.STRING
    },
    payment: {
      type: type.STRING
    },
    chef: {
      type: type.STRING
    },
    details: {
      type: type.STRING
    },
    url: {
      type: type.STRING,
      validate: {
        isUrl: true
      }
    },
    phone: {
      type: type.STRING
    },
    parties: {
      type: type.STRING
    },
    party_contact: {
      type: type.STRING
    },
    special: {
      type: type.STRING
    }
  }, {
    freezeTableName: true
  })
}

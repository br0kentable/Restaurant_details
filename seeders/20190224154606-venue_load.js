'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var places = require('../rest_test.json').restaurants;
    var seedArray = [];
    places.forEach((restaurant) => {
      seedArray.push({
        id: restaurant['id'],
        name: restaurant['name'],
        description: restaurant['description'],
        menuOne: restaurant['menuOne'],
        menuTwo: restaurant['menuTwo'],
        menuThree: restaurant['menuThree'],
        menuFour: restaurant['menuFour'],
        menuFive: restaurant['menuFive'],
        cross_street: restaurant['cross_street'],
        neighborhood: restaurant['neighborhood'],
        hours: restaurant['hours'],
        cuisine: restaurant['cuisine'],
        style: restaurant['style'],
        dress: restaurant['dress'],
        parking: restaurant['parking'],
        transit: restaurant['transit'],
        payment: restaurant['payment'],
        chef: restaurant['chef'],
        details: restaurant['details'],
        url: restaurant['url'],
        phone: restaurant['phone'],
        parties: restaurant['parties'],
        party_contact: restaurant['party_contact'],
        special: restaurant['special'],
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    })
  })
  queryInterface.bulkDelete('Restaurants', null);
  return queryInterface.bulkInsert('Restaurants', seedArray, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants', null)
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

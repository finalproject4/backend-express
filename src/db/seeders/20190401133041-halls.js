'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('halls', [
      { price: 44, type: 'wedding', section: 'female',created_at: new Date, updated_at: new Date, user_id: 17 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('halls', null, {});
    
  }
};

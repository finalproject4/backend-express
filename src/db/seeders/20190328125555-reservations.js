'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('reservations', [{
        user_id: 1,
        tool_id: 1,
        date: new Date,
        created_at: new Date,
        updated_at: new Date
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

    */
   return queryInterface.bulkDelete('reservations', null, {});
  }
};

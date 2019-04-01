'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     
    return queryInterface.bulkInsert('tools', [
      { price: 44, type: 'lights', quantity: 3 ,created_at: new Date, updated_at: new Date, user_id: 17 },
      { price: 45, type: 'speakers', quantity: 7 ,created_at: new Date, updated_at: new Date, user_id: 17 },
      { price: 45, type: 'test', quantity: 7 ,created_at: new Date, updated_at: new Date , user_id: 17},
      { price: 45, type: 'test', quantity: 7 ,created_at: new Date, updated_at: new Date , user_id:17}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('tools', null, {});
    
  }
};

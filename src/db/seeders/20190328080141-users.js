'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [
        {   
          email: "hshghs@h2h.com", 
          hashed_password: 'kwk93', 
          first_name: "Abdulmohsin" ,
          created_at: new Date, 
          updated_at: new Date 
        },
        {   
          email: "hshsxxiu@h2h.com", 
          hashed_password: 'kwk93', 
          first_name: "Abdulmohsin" ,
          created_at: new Date, 
          updated_at: new Date 
        }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('users', null, {});
  
  }
};

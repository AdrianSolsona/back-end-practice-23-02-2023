'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Artists', [
        {id: 1,name: "David", style: "Nastas", instagram: "dabidfkljdbgmail.com", tarifa: 10, email:"dabidfkljdb@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
        {id: 2,name: "David", style: "Nastas", instagram: "dabidfkljdbgmail.com", tarifa: 10, email:"dabidfkljdb@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
        {id: 3,name: "David", style: "Nastas", instagram: "dabidfkljdbgmail.com", tarifa: 10, email:"dabidfkljdb@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"}
   
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

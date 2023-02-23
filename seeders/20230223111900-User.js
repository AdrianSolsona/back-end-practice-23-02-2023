'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     *Example:
     */
     await queryInterface.bulkInsert('Users', [
      {id: 1,name: "Alyna", surname: "Nastas", phone: "666555444",payment:"1", dni: "20491735t", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 2,name: "Miguel", surname: "Nastaos", phone: "666755444",payment:"2", dni: "20491735h", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 3,name: "Armando", surname: "Nastais", phone: "666855444",payment:"3", dni: "20491735y", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"}
      ,

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

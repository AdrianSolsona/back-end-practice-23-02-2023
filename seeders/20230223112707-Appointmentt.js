'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
    await queryInterface.bulkInsert('Appointmentts', [
      {id: 1,date: "24-02-2024", hour: "18:30", price: 2000, duration: 10, about:"dsdfasasdfasdfasdfasdfa", cream: false, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", ArtistId: 2, UserId:3},
      {id: 2,date: "24-02-2024", hour: "18:30", price: 2000, duration: 10, about:"dsdfasasdfasdfasdfasdfa", cream: false, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", ArtistId: 1, UserId:2},
      {id: 3,date: "24-02-2024", hour: "18:30", price: 2000, duration: 10, about:"dsdfasasdfasdfasdfasdfa", cream: false, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", ArtistId: 1, UserId:1}
      
 
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

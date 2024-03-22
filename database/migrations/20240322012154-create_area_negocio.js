'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_area_negocio', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      Area: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      bl_area: {
        type: Sequelize.INTEGER,
        defaultValue: null
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_area_negocio');
  }
};

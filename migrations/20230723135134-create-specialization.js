'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Specializations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      specializationTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SpecializationTypes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE' 
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Specializations');
  }
};

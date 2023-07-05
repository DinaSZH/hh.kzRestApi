"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("WorkingHistories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      responsibilities: {
        allowNull: false,
        type: Sequelize.STRING
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      resumeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Resumes",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("WorkingHistories");
  }
};

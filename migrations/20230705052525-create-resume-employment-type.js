"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ResumeEmploymentTypes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resumeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Resumes",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      EmploymentTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "EmploymentTypes",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ResumeEmploymentTypes");
  }
};


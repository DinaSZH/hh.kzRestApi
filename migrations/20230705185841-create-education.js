"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Educations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      university_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      faculty: {
        allowNull: false,
        type: Sequelize.STRING
      },
      major: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable("Educations");
  }
};

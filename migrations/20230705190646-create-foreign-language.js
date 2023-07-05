"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ForeignLanguages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable("ForeignLanguages");
  }
};

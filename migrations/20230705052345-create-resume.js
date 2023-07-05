"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Resumes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      salary_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      main_language: {
        type: Sequelize.STRING,
        allowNull: false
      },
      skills: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cities",
          key: "id"
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        },
      },
      citizenship: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Countries",
          key: "id"
        },
      },
      createdAt: {
        allowNull:false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull:false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Resumes");
  }
};

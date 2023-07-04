const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // importing settings for connection to db

const Skill = sequelize.define(
  "Skill",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);

module.exports = Skill;

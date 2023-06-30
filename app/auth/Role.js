const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // importing settings for connection to db

const Role = sequelize.define(
  "Role",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);

module.exports = Role;

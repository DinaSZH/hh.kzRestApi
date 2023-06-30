const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // importing settings for connection to db

const AuthCode = sequelize.define(
  "AuthCode",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    valid_till: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);

module.exports = AuthCode;

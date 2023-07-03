const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // importing settings for connection to db
const Country = require("./Country")

const City = sequelize.define("City", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);

City.belongsTo(Country, { foreignKey: "countryId" });

module.exports = City;

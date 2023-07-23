const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db"); // importing settings for connection to db
const SpecializationType = require("./SpecializationType");

const Specialization = sequelize.define("Specialization", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);

Specialization.belongsTo(SpecializationType, { foreignKey: "specializationTypeId" });

module.exports = Specialization;
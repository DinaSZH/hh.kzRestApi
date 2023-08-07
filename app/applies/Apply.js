const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // importing settings for connection to db
const Resume = require("../resume/models/Resume");
const Vacancy = require("../vacancy/models/Vacancy");

const Apply = sequelize.define("Apply", {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

Apply.belongsTo(Resume, { foreignKey: "resumeId" });
Apply.belongsTo(Vacancy, { foreignKey: "vacancyId" });

module.exports = Apply;
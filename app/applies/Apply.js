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

Apply.belongsTo(Resume, { foreignKey: "resumeId" , as: 'resume'});
Apply.belongsTo(Vacancy, { foreignKey: "vacancyId", as: 'vacancy' });

module.exports = Apply;
const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db"); // importing settings for connection to db
const Resume = require("./Resume")
const EmploymentType = require("../employment-type/EmploymentType")

const ResumeEmploymentType = sequelize.define("ResumeEmploymentType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);

Resume.belongsToMany(EmploymentType, { through: ResumeEmploymentType });
EmploymentType.belongsToMany(Resume, { through: ResumeEmploymentType });

module.exports = ResumeEmploymentType;

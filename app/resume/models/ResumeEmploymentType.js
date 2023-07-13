const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db"); // importing settings for connection to db
const Resume = require("./Resume")
const EmploymentType = require("../../employment-type/EmploymentType")

const ResumeEmploymentTypes = sequelize.define("ResumeEmploymentTypes", {
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




Resume.belongsToMany(EmploymentType, { through: ResumeEmploymentTypes, foreignKey: "resumeId", 
otherKey: 'employmentTypeId' });
EmploymentType.belongsToMany(Resume, { through: ResumeEmploymentTypes,  foreignKey: "employmentTypeId", 
otherKey: 'resumeId'  });



module.exports = ResumeEmploymentTypes;

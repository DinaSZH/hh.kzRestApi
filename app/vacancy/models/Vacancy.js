const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db"); // importing settings for connection to db
const City = require("../../region/City");
const Specialization = require("../../specializations/models/Specialization");
const User = require("../../auth/User");
const Company = require("../../auth/Company");
const Experience = require("./Experience");
const EmploymentType = require('../../employment-type/EmploymentType');

const Vacancy = sequelize.define("Vacancy", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary_from: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    salary_to: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    salary_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    skills: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    about_company: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  }
);

Vacancy.belongsTo(City, { foreignKey: "cityId", as: "city" });
Vacancy.belongsTo(User, { foreignKey: "userId" });
Vacancy.belongsTo(Company, { foreignKey: "companyId", as: "company"});
Vacancy.belongsTo(Specialization, { foreignKey: "specializationId", as: "specialization"});
Vacancy.belongsTo(Experience, { foreignKey: "experienceId", as: "experience"});
Vacancy.belongsTo(EmploymentType, { foreignKey: "employmentTypeId", as: "employmentType"});


module.exports = Vacancy;
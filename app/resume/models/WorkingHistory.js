const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db"); // importing settings for connection to db
const Resume = require("./Resume");

const WorkingHistory = sequelize.define("WorkingHistory", {
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    responsibilities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);

WorkingHistory.belongsTo(Resume, { foreignKey: "resumeId" });

Resume.hasMany(WorkingHistory, {foreignKey: 'resumeId', as: "workingHistories"}); 

module.exports = WorkingHistory;
const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db"); // importing settings for connection to db
const City = require("../../region/City");
const Country = require("../../region/Country");
const User = require("../../auth/User")

const Resume = sequelize.define("Resume", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lats_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    salary_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    main_language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    skills: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  }
);

Resume.belongsTo(City, { foreignKey: "cityId" });
Resume.belongsTo(Country, { foreignKey: "citizenship" });
Resume.belongsTo(User, { foreignKey: "userId" });


module.exports = Resume;

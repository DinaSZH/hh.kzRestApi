const Role = require("../app/auth/Role");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Role.bulkCreate([{ name: "employee" }, { name: "manager" }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};

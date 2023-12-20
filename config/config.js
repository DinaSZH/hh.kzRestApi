// config.js
const fs = require('fs');
const path = require('path')

module.exports = {
  development: {
    username: "admin",
    password: "root",
    database: "admin",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: "doadmin",
    password: "AVNS_dUK_IVCu8ZVo8Qxg3-f",
    database: "defaultdb",
    host: "db-postgresql-sgp1-91621-do-user-15416786-0.c.db.ondigitalocean.com",
    dialect: "postgres",
    port: 25060,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt"))
      }
    }
  },
};

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
    password: "AVNS_UPVGHaFzk8YnWHaLxwC",
    database: "defaultdb",
    host: "db-postgresql-hhkz-do-user-14842323-0.c.db.ondigitalocean.com",
    dialect: "postgres",
    port: 25060,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt"))
      }
    }
  },
};

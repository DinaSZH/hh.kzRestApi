// config.js

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
    password: "AVNS_r2qG_PlxwZX4Zf7y3_9",
    database: "defaultdb",
    host: "db-postgresql-sgp1-18324-do-user-14539456-0.b.db.ondigitalocean.com",
    dialect: "postgres",
    port: 25060
  },
};

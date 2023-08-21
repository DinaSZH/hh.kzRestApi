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
    password: "AVNS_5duG0_rQ5KNHJXFpOs9",
    database: "defaultdb",
    host: "db-postgresql-sgp1-12716-do-user-14539456-0.b.db.ondigitalocean.com",
    dialect: "postgres",
    port: 25060
  },
};

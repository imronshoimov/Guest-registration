const path = require("path");

require("dotenv").config({ path: path.join(path.resolve(), ".env") });
module.exports = {
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};

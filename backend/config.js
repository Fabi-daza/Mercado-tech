const { Pool } = require("pg");
require("dotenv").config({path:'./.env'});

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  allowExitOnIdle: true,
  ssl:true,
});

module.exports = pool;
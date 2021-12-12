const pg = require("pg");

const pool = new pg.Pool({
    user: "postgres",
    password: "toor",
    host: process.env.SERVER,
    port: 5432,
    database: "users"
});

module.exports = pool;
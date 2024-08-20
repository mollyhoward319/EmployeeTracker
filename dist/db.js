"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.db_user,
    password: process.env.db_password,
    host: process.env.db_host,
    port: parseInt(process.env.db_port),
    database: process.env.db_name
});
exports.default = pool.connect();

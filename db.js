//数据库连接池
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"test",
    connectionLimit: 10 // 同时最大连接数
});

module.exports = pool;
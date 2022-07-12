const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"meaningfulSunday123!",
    database: "testdb"
})

module.exports = connection 
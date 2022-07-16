const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"meaningfulSunday123!",
    database: "testdb"
})


const database = {
    "databasename": "techconnect",
    "username": "root",
    "password": "rootpassword"
}
module.exports = connection 
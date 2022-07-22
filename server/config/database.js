const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "techconnect-1st-instance.chp39gjnhakx.ap-southeast-2.rds.amazonaws.com",
    user: "admin",
    password:"techconnect1",
    port: 3306,
    database: "techconnect"
})


const database = {
    "databasename": "techconnect",
    "username": "admin",
    "password": "rootpassword"
}
module.exports = connection 
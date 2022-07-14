const express = require("express");
const connection = require("./config/database.js")
const app = express();

app.get("/", function (req, res) {

    //CORS policy
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var mySQLquery = "SELECT * FROM testdb.user"
    connection.query(mySQLquery, function (err, result) {
        if (err && !req.body) {
            return res.status(503).send({ status: 1, message: "Error" })

        } else {
            return res.status(200).json(result)
        }
    })
})

app.get("/tutors", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //CORS policy
    var mySQLquery = "SELECT * FROM testdb.tutors"
    connection.query(mySQLquery, function (err, result) {
        if (err && !req.body) {
            return res.status(503).send({ status: 1, message: "Error" })

        } else {
            return res.status(200).json(result)
        }
    })
})
app.listen(3007, function () {
    console.log("App listened function");

    connection.connect(function (err) {
        if (err) {
            throw err;
        } console.log("DB connection is successful!")
    })
})


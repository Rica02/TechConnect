const express = require("express");
const connection = require("./config/database.js")
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const saltRounds = 10;
// for zoom (old -- moved to zoomserver/index.js)
// const zoomConfig = require("./config/zoom.js");
// const jwt = require("jsonwebtoken");
// const rp = require("request-promise");
// const request = require('request')

app.use(express.json())

app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(cors())

app.get("/", function (req, res) {
    var mySQLquery = "SELECT * FROM techconnect.user"
    connection.query(mySQLquery, function (err, result) {
        if (err && (result == null)) {
            console.log(err);
            return res.send({ status: 1, message: "Error" })
        } else {
            console.log("succeed");
            console.log(result);
            res.send({ message: "the result is ", result });
            //return res.status(200).json(result)
        }
    })
})

app.post("/register", async function (req, res) {

    var requestedEmail = req.body.email
    var requestedPW = req.body.password
    var requestedPhone = req.body.phone
    console.log(req.body.requestedPhone);
    var registerQuery = "INSERT INTO techconnect.user (email,password,phone) VALUES (?,?,?)"
    console.log("registerQuery " + registerQuery);
    connection.query(registerQuery,[resquestedEmail,resquestedPW,requestedPhone],function(sqlErr, result){
        if(sqlErr){
            console.log(sqlErr);
        } else {
            console.log(req);
            console.log(result);
            console.log("succeed");
        }
    })



})

app.post("/login",  function (req, res) {
    console.log("get LOGIN FROM BACKEND");
    var email = req.body.email
    var password = req.body.password

    var searchQuery = "SELECT * FROM techconnect.user WHERE email = ?"
    connection.query(searchQuery, [email], async (sqlError, result) => {
            if (sqlError) {
                console.log(sqlError);
            }
            else if (result.length > 0) {
                const comparison = await bcrypt.compare(password, result[0].password)
                console.log(comparison);
                if (comparison) {
                    console.log("login successfully");
                } else {
                    console.log("no combination found");
                    res.send(result)
                }
            }
            else{
                console.log("no combination found");
            }

//   rp(options)
//     .then(function (response) {
//       console.log("response is: ", response.join_url);
//       // response.status(200).json(response);
//       let dataRes = {
//         join_url: response.join_url,
//       };
//       res.status(200).json(dataRes);

app.post("/login", (req, res) => {

})


app.listen(3007, function () {
    console.log("App listened function");
    connection.connect(function (err) {
        if (err) {
            throw err;
        } console.log("DB connection is successful!")
    })
})
//connection.end()

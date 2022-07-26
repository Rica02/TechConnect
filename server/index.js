const express = require("express");
const connection = require("./config/database.js")
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");

// for zoom
const zoomConfig = require("./config/zoom.js");
const jwt = require("jsonwebtoken");
const rp = require("request-promise");

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true,
}))

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

app.post("/register", function (req, res) {
    var resquestedEmail = req.body.email
    var resquestedPW = req.body.password
    var registerQuery = "INSERT INTO techconnect.user (email, password) VALUES (?,?)"
    connection.query(registerQuery,[resquestedEmail, resquestedPW],function(sqlErr, result){
        if(sqlErr){
            console.log(sqlErr);
        }else{
            console.log(req);
            console.log(result);
            console.log("succeed");
        }
    } )
})

app.get("/register", function (req, res) {
    console.log("get register FROM BACKEND");
    console.log(req.body);
    var email = req.body.email
    var password = req.body.password

    var regUserQuery = "INSERT INTO techconnect.user (email, password) VALUES (?,?)"
    connection.query(regUserQuery, [email, password],
        (sqlErr, result) => {
            if (sqlErr) {
                console.log(sqlErr);
            } else {
                console.log(result);
                return res.status(200).json(result)
            }
        }
    )
})


// app.get("/tutors", function (req, res) {

//     var mySQLquery = "SELECT * FROM testdb.tutors"
//     connection.query(mySQLquery, function (err, result) {
//         if (err && !req.body) {
//             return res.status(503).send({ status: 1, message: "Error" })

//         } else {
//             return res.status(200).json(result)
//         }
//     })
// })


app.post("/login", function (req, res) {
    console.log("get LOGIN FROM BACKEND");

    var email = req.body.email
    var password = req.body.password
    console.log(req.body);
    var searchQuery = "SELECT * FROM techconnect.user WHERE email = ? AND password = ?"
    connection.query(searchQuery, [email, password],
        (sqlError, result) => {
            if (sqlError) {
                console.log(sqlError);
            }
            else if(result.length > 0) {
                console.log(result);
                res.send( result)

            } else{
                console.log("no combination found");
                res.send( result)
            }

        })
})


// ZOOM API

var email, userid, resp;

//Use the ApiKey and APISecret from config/zoom.js
const payload = {
  iss: zoomConfig.APIKey,
  exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, zoomConfig.APISecret);
app.post("/meeting", (req, res) => {
  email = req.body.meetingData.email;
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: req.body.meetingData.topic,
      type: req.body.meetingData.type,
      password: req.body.meetingData.password,
      start_time: req.body.meetingData.start_time,
      type: 2,                   // 1 = instant meeting, 2 = scheduled meeting
      default_password: false,
      duration: 40,              // 40 min is the max meeting time allowed with a basic free Zoom account
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("response is: ", response.join_url);
      // response.status(200).json(response);
      let dataRes = {
        join_url: response.join_url,
      };
      res.status(200).json(dataRes);

      res.send("create meeting result: " + JSON.stringify(response));
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});




app.listen(3007, function () {
    console.log("App listened function");
    connection.connect(function (err) {
        if (err) {
            throw err;
        } console.log("DB connection is successful!")
    })
})
//connection.end()

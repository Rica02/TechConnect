// bring in environment secrets through dotenv
require('dotenv')

// include required modules
const express = require("express");
const connection = require("./config/database.js")
const cors = require('cors')
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const zoomConfig = require('./config/zoom.js');
const rp = require('request-promise');
const app = express();

app.use(cors());
app.use(express.json());
// stripe-checkout
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(express.static("public"));

app.post("/pay", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 0.1,
      currency: "aud",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

//---------------stripe-checkout EDN

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.json());
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

// register user function
app.post("/register", async function (req, res) {

    var requestedEmail = req.body.email
    var requestedPW = req.body.password
    var requestedPhone = req.body.phone
    var requestedFName = req.body.fname
    var requestedLName = req.body.lname
    var userType = 3

    var requestedPW2 = await bcrypt.hash(req.body.password, saltRounds)
    console.log(requestedPW);
    console.log(requestedPW2);
    var registerQuery = "INSERT INTO techconnect.user (email,password,phone,admin,firstName,lastName) VALUES (?,?,?,?,?,?)"
    console.log(registerQuery);

    connection.query(registerQuery, [requestedEmail, requestedPW2, requestedPhone, userType, requestedFName, requestedLName], function (sqlErr, result) {
        if (sqlErr) {
            console.log(sqlErr);
        } else {
            console.log(req);
            console.log(result);
            console.log("succeed");
        }
    })
})

// login function
app.post("/login", function (req, res) {

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
                res.send(result)
            } else {
                console.log("no combination found");
            }
        }
        else {
            console.log("no combination found");
        }
    })
})

// ADMIN FUNCTIONS

// get tutor and student list (to display in admin's "create meeting" page)
app.post("/getusers", function (req, res) {

    var studentList = [];
    var tutorList = [];

    var searchQuery = "SELECT * FROM techconnect.user WHERE admin = 2 or admin = 3"
    connection.query(searchQuery, async (sqlError, result) => {
        if (sqlError) {
            console.log(sqlError);
        }
        else if (result.length > 0) {
            // for each user, sort them in either student or tutor list
            result.forEach(function (user, index) {
                myUser = {};
                if (user.admin == 2) {
                    myUser["id"] = user.id;
                    myUser["name"] = user.firstName + " " + user.lastName;
                    myUser["admin"] = user.admin;
                    tutorList.push(myUser);
                } else if (user.admin == 3) {
                    myUser["id"] = user.id;
                    myUser["name"] = user.firstName + " " + user.lastName;
                    myUser["admin"] = user.admin;
                    studentList.push(myUser);
                }
            })

            // console.log("Tutor list: " + JSON.stringify(tutorList));
            // console.log("Student list: " + JSON.stringify(studentList));

            // send both lists to front-end
            let dataRes = { tutorList, studentList }
            res.status(200).json(dataRes);
            //console.log("Result: " + JSON.stringify(result));
        }
        else {
            console.log("Error in retrieving user info");
        }
    })
})


// ZOOM API

// get email of admin from env
var email = process.env.REACT_APP_ADMIN_EMAIL;

// use the API key and secret from config/zoom.js
const payload = {
    iss: zoomConfig.APIKey,
    exp: ((new Date()).getTime() + 5000)
};
const token = jwt.sign(payload, zoomConfig.APISecret);

// use userinfo from the form and make a post request to /userinfo
app.post('/meeting', (req, res) => {
    console.log("IN BACKEND: Topic = " + req.body.topic + " Start date = " + req.body.start_time);
    var options = {
        method: "POST",
        // make API call "create meeting" Zoom endpoint
        uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
        body: {
            topic: req.body.topic,
            start_time: req.body.start_time,
            type: 2,                   // 1 = instant meeting, 2 = scheduled meeting
            default_password: false,
            duration: 40,              // 40 min is the max meeting time allowed with a basic free Zoom account
            settings: {
                host_video: "true",
                participant_video: "true",
            },
        },
        auth: {
            'bearer': token
        },
        headers: {
            'User-Agent': 'Zoom-api-Jwt-Request',
            'content-type': 'application/json'
        },
        json: true // parse the JSON string in the response
    };

    // use request-promise module's .then() method to make request calls.
    rp(options)
        .then(function (response) {
            //printing the response on the console
            console.log('Response: ', response);
            //console.log(typeof response);

            let dataRes = {
                join_url: response.join_url,
            };

            // TODO: send details to DB

            //res.send("Create meeting result: " + JSON.stringify(response));
            res.status(200).json(dataRes);
        })
        .catch(function (err) {
            // API call failed...
            console.log('API call failed, reason ', err);
        });
});


app.listen(3007, function () {
    console.log("App listened function");
    connection.connect(function (err) {
        if (err) {
            throw err;
        } console.log("DB and Zoom app connection successful! Listening at PORT: 3007")
    })
})

//connection.end()
//-------serverContext--------------

app.post("/api/getUser", function (req, res) {

    console.log("get LOGIN FROM BACKEND");
    var email = req.body.email
    var searchQuery = "SELECT * FROM techconnect.user WHERE email = ?"
    connection.query(searchQuery, [email], async (sqlError, result) => {
        if (sqlError) {
            console.log(sqlError);
        }
        else if (result.length > 0) {
            res.send(result)
        }
        else {
            console.log("no combination found");
        }
    })
})
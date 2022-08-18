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
    console.log("email",email);
    console.log("password",password);
    var searchQuery = "SELECT * FROM techconnect.user WHERE email = ?"
    connection.query(searchQuery, [email], async (sqlError, result) => {
        console.log("result",result);
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

//forgot password 

app.post("/forgot-password", function (req, res) {

    var { email } = req.body
    var { phone } = req.body

    //var searchQuery = "SELECT email, phone FROM techconnect.user WHERE email = ?"
    var searchQuery = "SELECT * FROM techconnect.user WHERE email = ? AND phone = ?"

    connection.query(searchQuery, [email,phone], async (sqlError, result) => {
        if (sqlError) {
            console.log(sqlError);
        }
        else if (result && result.length > 0) {
            res.status(200).send({message:"Directing to reset password", result})
        }
        else{
            res.status(210).send({message: "No email or phone associated with"})
        }

    })

})
//reset password 

app.post("/api/resetpassword", async function (req, res) {
    //testing account current: 

    //acc: matthew.ng.id20@gmail.com
    //password: passwordtest
    var { email } = req.body
    var { password } = req.body
    //password encryption
    var newPassword = await bcrypt.hash(password, saltRounds)
    var updateQuery = "UPDATE techconnect.user SET password = ? WHERE (email = ?)"


    //Update the new password
    connection.query(updateQuery, [newPassword,email], async (sqlError, result) => {
        if (sqlError) {
            console.log(sqlError);
        }
        else if (result && result.length > 0) {
            res.status(200).send({message:"update successful user", result})
        }
        else{
            res.status(210).send({message: "No result found"})
        }

    })

})
// STUDENT / TUTOR FUNCTIONS

// get student's meeting details from DB
app.post("/getstudentmeetings", function (req, res) {

    var meetingList = [];

    var selectQuery = "SELECT  m.tutorId, m.online, m.meetingId, m.meetingPw, "
     + "m.startTime, m.concluded, t.firstName, t.lastName FROM techconnect.meetings m "
     + "INNER JOIN techconnect.user t ON (m.tutorId = t.id) WHERE studentId = ?"
    connection.query(selectQuery,[
        req.body.userId
    ], function (sqlErr, result) {
        if (sqlErr) {
            console.log(sqlErr);
        }
        else if (result.length > 0) {

            // get each meeting details and add them to array
            result.forEach(function (meeting, index) {
                myMeeting = {};
                myMeeting["tutorName"] = meeting.firstName + " " + meeting.lastName;
                myMeeting["online"] = meeting.online;
                myMeeting["meetingId"] = meeting.meetingId;
                myMeeting["joinUrl"] = meeting.joinUrl;
                myMeeting["meetingPw"] = meeting.meetingPw;
                myMeeting["startTime"] = meeting.startTime;
                myMeeting["concluded"] = meeting.concluded;
                meetingList.push(myMeeting);
            })

            //console.log("Student meeting list: " + JSON.stringify(meetingList));

            // send meeting lists to front-end
            res.status(200).json(meetingList);
            //console.log("Result: " + JSON.stringify(result));
        }
        else {
            console.log("Error in retrieving meeting info");
        }
    })
})

// get tutor's meeting details from DB
app.post("/gettutormeetings", function (req, res) {

    var meetingList = [];

    var selectQuery = "SELECT  m.studentId, m.online, m.startUrl, m.startTime, "
        + "m.concluded, t.firstName, t.lastName FROM techconnect.meetings m "
        + "INNER JOIN techconnect.user t ON (m.studentId = t.id) WHERE tutorId = ?"
    connection.query(selectQuery, [
        req.body.userId
    ], function (sqlErr, result) {
        if (sqlErr) {
            console.log(sqlErr);
        }
        else if (result.length > 0) {

            // get each meeting details and add them to array
            result.forEach(function (meeting, index) {
                myMeeting = {};
                myMeeting["studentName"] = meeting.firstName + " " + meeting.lastName;
                myMeeting["online"] = meeting.online;
                myMeeting["meetingStartUrl"] = meeting.startUrl;
                myMeeting["startTime"] = meeting.startTime;
                myMeeting["concluded"] = meeting.concluded;
                meetingList.push(myMeeting);
            })

            // console.log("Tutor meeting list: " + JSON.stringify(meetingList));

            // send meeting lists to front-end
            res.status(200).json(meetingList);
            //console.log("Result: " + JSON.stringify(result));
        }
        else {
            console.log("Error in retrieving meeting info");
        }
    })
})

// ADMIN FUNCTIONS

// get tutor and student list (used in admin pages)
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
                    myUser["firstName"] = user.firstName;
                    myUser["lastName"] = user.lastName;
                    myUser["email"] = user.email;
                    myUser["phone"] = user.phone;
                    myUser["admin"] = user.admin;
                    tutorList.push(myUser);
                } else if (user.admin == 3) {
                    myUser["id"] = user.id;
                    myUser["firstName"] = user.firstName;
                    myUser["lastName"] = user.lastName;
                    myUser["email"] = user.email;
                    myUser["phone"] = user.phone;
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

// get all meeting details from DB
app.post("/getallmeetings", function (req, res) {

    var meetingList = [];

    var selectQuery = "SELECT m.id, m.studentId, m.tutorId, m.online, m.meetingId, m.startTime, m.concluded FROM techconnect.meetings m "
    connection.query(selectQuery,[
        req.body.userId
    ],function(sqlErr, result){
        if (sqlErr) {
            console.log(sqlErr);
        }
        else if (result.length > 0) {

            // get each meeting details and add them to array
            result.forEach(function (meeting, index) {
                myMeeting = {};
                myMeeting["id"] = meeting.id;
                myMeeting["studentId"] = meeting.studentId;
                myMeeting["tutorId"] = meeting.tutorId;
                myMeeting["online"] = meeting.online;
                myMeeting["meetingId"] = meeting.meetingId;
                myMeeting["startTime"] = meeting.startTime;
                myMeeting["concluded"] = meeting.concluded;
                meetingList.push(myMeeting);
            })
            //console.log("Meeting list: " + JSON.stringify(meetingList));

            // send meeting lists to front-end
            res.status(200).json(meetingList);
            //console.log("Result: " + JSON.stringify(result));
        }
        else {
            console.log("Error in retrieving meeting info");
        }
    })
})


// upload in-person meeting details to DB
app.post("/inpersonmeeting", async function (req, res) {

    var registerQuery = "INSERT INTO techconnect.meetings (studentId, tutorId, online, startTime, concluded) VALUES (?,?,?,?,?)"
    connection.query(registerQuery, [
        req.body.student_id,
        req.body.tutor_id,
        false,
        req.body.start_time,
        false
    ], function (sqlErr, result) {
        if (sqlErr) {
            console.log(sqlErr);
        } else {
            //console.log(req);
            //console.log(result);
            console.log("In-person meeting details successfully uploaded to DB!");
            res.status(200).json({ status: "OK" });
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
app.post('/zoommeeting', (req, res) => {
  //console.log("IN BACKEND: Topic = " + req.body.topic + " Start date = " + req.body.start_time);
  var options = {
    method: "POST",
    // make API call "create meeting" Zoom endpoint
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: req.body.topic,
      start_time: req.body.start_time,
      timezone: "Australia/Sydney",
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

            // upload meeting details to DB
            var registerQuery = "INSERT INTO techconnect.meetings (studentId, tutorId, online, startUrl, meetingId, meetingPw, startTime, concluded) VALUES (?,?,?,?,?,?,?,?)"
            connection.query(registerQuery,[
                req.body.student_id,
                req.body.tutor_id,
                true,
                response.start_url,
                response.join_url,
                response.id,
                response.password,
                response.start_time,
                false
            ], function (sqlErr, result) {
                if (sqlErr) {
                    console.log(sqlErr);
                } else {
                    //console.log(req);
                    //console.log(result);
                    console.log("Zoom meeting details successfully uploaded to DB!");
                }
            })

            //res.send("Create meeting result: " + JSON.stringify(response));
            res.status(200).json({ status: "OK" });
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

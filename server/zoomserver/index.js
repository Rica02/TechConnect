// Bring in environment secrets through dotenv
require('dotenv/config')

// Use the request module to make HTTP requests from Node
const request = require('request')

const cors = require('cors')

// Run the express app
const express = require('express')
const app = express()

app.use(cors())
// Allow CORS access
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3008");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Call Zoom auth API
app.get('/', (req, res) => {

  console.log("inside get");

  // Step 1:
  // Check if the code parameter is in the url
  // if an authorization code is available, the user has most likely been redirected from Zoom OAuth
  // if not, the user needs to be redirected to Zoom OAuth to authorize

  if (req.query.code) {

    console.log("inside in query");
      // Step 3:
      // Request an access token using the auth code

      let url = 'https://zoom.us/oauth/token?grant_type=authorization_code&code=' + req.query.code + '&redirect_uri=' + process.env.REACT_APP_REDIRECT_URL;

      request.post(url, (error, response, body) => {

          // Parse response to JSON
          body = JSON.parse(body);

          // Logs your access and refresh tokens in the browser
          console.log(`access_token: ${body.access_token}`);
          console.log(`refresh_token: ${body.refresh_token}`);

          if (body.access_token) {

              // Step 4:
              // We can now use the access token to authenticate API calls

              // Send a request to get your user information using the /me context
              // The `/me` context restricts an API call to the user the token belongs to
              // This helps make calls to user-specific endpoints instead of storing the userID


              // This code retrieves meeting list. Replace this with POST call to create meeting (see below)
              request.get('https://api.zoom.us/v2/users/me/meetings', (error, response, body) => {
                  if (error) {
                      console.log('API Response Error: ', error)
                  } else {
                      body = JSON.parse(body);
                      // Display response in console
                      console.log('API call ', body);
                  }
              }).auth(null, null, true, body.access_token);

          } else {
              console.log("Error occurred: " + error);
          }

      }).auth(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);

      return;
  }

  // Step 2:
  // If no authorization code is available, redirect to Zoom OAuth to authorize
  res.redirect('https://zoom.us/oauth/authorize?response_type=code&client_id=' + process.env.REACT_APP_CLIENT_ID + '&redirect_uri=' + process.env.REACT_APP_REDIRECT_URL)
  console.log("under redirect");
})



// old create meeting API
app.post("/meeting", (req, res) => {
  //email = "techconnectweb@gmail.com";
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/me/meetings",
    body: JSON.stringify({
      topic: req.body.topic,
      type: req.body.type,
      password: req.body.password,
      start_time: req.body.start_time,
      type: 2,                   // 1 = instant meeting, 2 = scheduled meeting
      default_password: false,
      duration: 40,              // 40 min is the max meeting time allowed with a basic free Zoom account
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    }),
    // auth: {
    //   bearer: token,
    // },
    headers: {
      "Authorization":`Bearer ${body.access_token}`,
      "Content-Yype": "application/json",
    },
    //json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {

      // If successful, print join_url
      // TODO: add join_url to database, then redirect user to successful "MeetingCreated" page

      console.log("response is: ", response.join_url);
      // response.status(200).json(response);
      let dataRes = {
        join_url: response.join_url,
      };
      res.status(200).json(dataRes);
      res.send("Create meeting result: " + JSON.stringify(response));
    })
    .catch(function (err) {
      console.log("API call failed, reason ", err);
    });
});


app.listen(3008, () => console.log(`Zoom app listening at PORT: 3008`))

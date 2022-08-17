import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentPage() {

  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [pastMeetings, setPastMeetings] = useState([]);

  console.log("Upcoming meetings: " + JSON.stringify(upcomingMeetings));
  console.log("Past meetings: " + JSON.stringify(pastMeetings))

  // on page load, get student meetings
  useEffect(() => {
    try {
        axios.post('http://localhost:3007/getstudentmeetings', {
          userId: "1"   // TODO: get current user id instead of hardcoding it
        })
          .then((response) => {
            console.log("Get student's meetings successful.");
            // console.log("Get users successful. Response data: " + JSON.stringify(response))

            // get response and store it in useState array
            var allMeetings = [...response.data];

            // sort meetings to corresponding arrays
            allMeetings.forEach(function (meeting, index) {
              if(meeting.concluded) {
                setPastMeetings([...pastMeetings, meeting]);
              } else if(!meeting.concluded) {
                setUpcomingMeetings([...upcomingMeetings, meeting]);
              }
            })

          }, (error) => {
              console.log("Error occurred: " + error);
          });
    } catch (error) {
        console.log("Get users failed, reason: " + error);
    }
  }, []);

 function UpcomingMeetings() {
  return(
    <>
      {upcomingMeetings.map((meeting, index) => (
        <tr key={index}>
          <td>{new Date(meeting.startTime).toLocaleString()}</td>
          <td>{(meeting.online == 1) ? "Online" : "In person"}</td>
          <td>{meeting.tutorName}</td>
          <td>
            {/* TODO: insert link or id/password if using Web SDK */}
            <a href="#">CLICK HERE TO START YOUR LESSON</a>
          </td>
        </tr>
      ))}
    </>
  )
 }

 function PastMeetings() {
  return(
    <>
      {pastMeetings.map((meeting, index) => (
        <tr key={index} >
          <td>{new Date(meeting.startTime).toLocaleString()}</td>
          <td>{(meeting.online == 1) ? "Online" : "In person"}</td>
          <td>{meeting.tutorName}</td>
          <td>{(meeting.concluded == 1) ? "Completed" : "Other"}</td>
        </tr>
      ))}
    </>
  )
 }

  return (
    <>
      <div className="dashboard-div-container">
        {/* TODO: get current user's first name */}
        <h2>Hello, [first name]</h2>
        <h3>Your upcoming lessons</h3>
        <table className="dashboard-table">
          <tbody>
            <tr>
              <th>DATE & TIME</th>
              <th>WHERE</th>
              <th>TUTOR</th>
              <th>JOIN VIDEO CALL</th>
            </tr>
            <UpcomingMeetings />
          </tbody>
        </table>
        <div>
          {/* TODO: on click event */}
          <button className="styled-button">I want to cancel this appointment</button>
        </div>
      </div>
      <div className="dashboard-div-container">
        <h3>Your past lessons</h3>
        <table className="dashboard-table">
          <tbody>
            <tr>
              <th>DATE & TIME</th>
              <th>WHERE</th>
              <th>TUTOR</th>
              <th>STATUS</th>
            </tr>
            <PastMeetings />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentPage;

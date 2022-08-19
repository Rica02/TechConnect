import React, { useState, useEffect } from "react";
import axios from "axios";
// import JoinZoom from "../JoinZoom";

function TutorPage() {
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [pastMeetings, setPastMeetings] = useState([]);
  const [currentId, setCurrentId] = useState();

  console.log("Upcoming meetings: " + JSON.stringify(upcomingMeetings));
  console.log("Past meetings: " + JSON.stringify(pastMeetings))

  // on page load, get tutor meetings
  useEffect(() => {
    setCurrentId((localStorage.getItem("id")))
    console.log(currentId);
    //setCurrentId(8)
    try {
      axios.post('http://localhost:3007/gettutormeetings', {
        userId: currentId
        // TODO: get current user id instead of hardcoding it
      })
        .then((result, reject) => {
          if (result && result.status === 200) {
            console.log("Get tutor's meetings successful.");
            // console.log("Get users successful. Response data: " + JSON.stringify(response))

            // get response and store it in useState array
            var allMeetings = [...result.data];

            // sort meetings to corresponding arrays
            allMeetings.forEach(function (meeting, index) {
              if (meeting.concluded) {
                setPastMeetings(values => [...values, meeting]);
              } else if (!meeting.concluded) {
                setUpcomingMeetings(values => [...values, meeting]);
              }
            })
          }
        }, (error) => {
          console.log("Error occurred: " + error);
        });
    } catch (error) {
      console.log("Get users failed, reason: " + error);
    }
  }, [currentId]);

 function UpcomingMeetings() {
  return(
    <>
      {upcomingMeetings.map((meeting, index) => (
        <tr key={index}>
          <td>{new Date(meeting.startTime).toLocaleString()}</td>
          <td>{(meeting.online == 1) ? "Online" : "In person"}</td>
          <td>{meeting.studentName}</td>
          <td>
            <a className="styled-link" href={meeting.meetingStartUrl}>CLICK HERE TO START YOUR LESSON</a>
            {/* TODO: fix Web SDK issue (overriding CSS) */}
            {/* <JoinZoom isTutor={true} /> */}
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
          <td>{meeting.studentName}</td>
          <td>{(meeting.concluded == 1) ? "Completed" : "Other"}</td>
        </tr>
      ))}
    </>
  )
 }

  return (
    <>
      <div className="dashboard-div-container">
        <h2>Welcome back!</h2>
        <h3>Your upcoming lessons</h3>
        <table className="dashboard-table">
          <tbody>
            <tr>
              <th>DATE & TIME</th>
              <th>WHERE</th>
              <th>STUDENT</th>
              <th>START VIDEO CALL</th>
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
              <th>STUDENT</th>
              <th>STATUS</th>
            </tr>
            <PastMeetings />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TutorPage;

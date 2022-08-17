import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPage() {
  const [userList, setUserList] = useState([]);
  const [meetingList, setMeetingList] = useState([]);

  // on page load, get student and tutor data
  useEffect(() => {
    try {
        axios.post('http://localhost:3007/getusers')
          .then((response) => {
            console.log("Get users successful.");
            // console.log("Get users successful. Response data: " + JSON.stringify(response))

            // get response and store it in useState array
            var newUserList = [...response.data.studentList, ...response.data.tutorList];
            setUserList(newUserList);

          }, (error) => {
              console.log("Error occurred: " + error);
          });
    } catch (error) {
        console.log("Get users failed, reason: " + error);
    }

    try {
      axios.post('http://localhost:3007/getallmeetings')
        .then((response) => {
          console.log("Get users successful.");
          // console.log("Get users successful. Response data: " + JSON.stringify(response))

          // get response and store it in useState array
          var newMeetingList = [...response.data];
          setMeetingList(newMeetingList);

        }, (error) => {
            console.log("Error occurred: " + error);
        });
  } catch (error) {
      console.log("Get users failed, reason: " + error);
  }
  }, []);

 function Users() {
  return(
    <>
      {userList.map((user, index) => (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{(user.admin == 3) ? "Student" : "Tutor"}</td>
        </tr>
      ))}
    </>
  )
 }

 function Meetings() {
  return(
    <>
      {meetingList.map((meeting, index) => (
        <tr key={index}>
          <td>{meeting.id}</td>
          <td>{meeting.studentId}</td>
          <td>{meeting.tutorId}</td>
          <td>{(meeting.online == 1) ? "Online" : "In person"}</td>
          <td>{(meeting.meetingId) ? meeting.meetingId : "N/A"}</td>
          <td>{new Date(meeting.startTime).toLocaleString()}</td>
          <td>{(meeting.concluded == 1) ? "Completed" : "Upcoming"}</td>
        </tr>
      ))}
    </>
  )
 }

  return (
    <>
      <div className="dashboard-div-container">
        <h2>Admin dashboard</h2>
        <h3>List of users</h3>
        <table className="dashboard-table">
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ACCOUNT TYPE</th>
          </tr>
          <Users />
        </table>
      </div>
      <div className="dashboard-div-container">
        <h3>List of meetings</h3>
        <table className="dashboard-table">
          <tr>
            <th>ID</th>
            <th>STUDENT ID</th>
            <th>TUTOR ID</th>
            <th>METHOD</th>
            <th>MEETING ID</th>
            <th>START TIME</th>
            <th>STATUS</th>
          </tr>
          <Meetings />
        </table>
      </div>
    </>
  );
}

export default AdminPage;

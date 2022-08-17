import React from "react";
import imgTest from "../assets/images/tutor-1.jpg";

function AdminPage() {

  // TODO: Replace UpcomingLessons() and PastLessons() functions to get data from database

  const UpcomingLessonsTestData = [
    {
      date: "Day, dd Month yyyy at hh:mm",
      where: "Online",
      tutorImg: imgTest,
      tutorName: "Tutor name",
      link: "#"
    }
  ];

  const PastLessonsTestData = [
    {
      date: "Day, dd Month yyyy at hh:mm",
      where: "Online",
      tutorImg: imgTest,
      tutorName: "Tutor name",
      status: "COMPLETED"
    }
  ];

 function UpcomingLessons() {
  return(
    <>
      {UpcomingLessonsTestData.map((lesson, index) => (
        <tr key={index}>
          <td>{lesson.date}</td>
          <td>{lesson.where}</td>
          <td>
            <img src={lesson.tutorImg} />
            {lesson.tutorName}
          </td>
          <td>
            <a href={lesson.link}>CLICK HERE TO START YOUR LESSON</a>
          </td>
        </tr>
      ))}
    </>
  )
 }

 function PastLessons() {
  return(
    <>
      {PastLessonsTestData.map((lesson, index) => (
        <tr key={index} >
          <td>{lesson.date}</td>
          <td>{lesson.where}</td>
          <td>
            <img src={lesson.tutorImg} />
            {lesson.tutorName}
          </td>
          <td>{lesson.status}</td>
        </tr>
      ))}
    </>
  )
 }

  return (
    <>
      <div className="dashboard-div-container">
        <h2>Hello, [username]</h2>
        <h3>Your upcoming lessons</h3>
        <table className="dashboard-table">
          <tr>
            <th>DATE & TIME</th>
            <th>WHERE</th>
            <th>TUTOR</th>
            <th>JOIN VIDEO CALL</th>
          </tr>
          <UpcomingLessons />
        </table>
        <div>
          <button className="styled-button">I want to cancel this appointment</button>
        </div>
      </div>
      <div className="dashboard-div-container">
        <h3>Your past lessons</h3>
        <table className="dashboard-table">
          <tr>
            <th>DATE & TIME</th>
            <th>WHERE</th>
            <th>TUTOR</th>
            <th>STATUS</th>
          </tr>
          <PastLessons />
        </table>
      </div>
    </>
  );
}

export default AdminPage;

import React, { useEffect, useState } from "react";
import { ButtonContainer, Form } from "./CreateMeetingStyle";
import axios from "axios";

function CreateMeeting() {
    const [inputs, setInputs] = useState({});
    const [isOnlineMeeting, setIsOnlineMeeting] = useState();
    const [studentList, setStudentList] = useState([]);
    const [tutorList, setTutorList] = useState([]);

    // console.log("Student list: " + JSON.stringify(studentList));
    // console.log("Tutor list: " + JSON.stringify(tutorList));

    // on page load, get student and tutor data
    useEffect(() => {
      try {
         axios.post('http://localhost:3007/getusers')
            .then((response) => {
              console.log("Get users successful.");
              // console.log("Get users successful. Response data: " + JSON.stringify(response))

              // get response and store it in useState array
              var newStudentList = [...response.data.studentList];
              var newTutorList = [...response.data.tutorList];
              setStudentList(newStudentList);
              setTutorList(newTutorList);

            }, (error) => {
                console.log("Error occurred: " + error);
            });
      } catch (error) {
          console.log("Get users failed, reason: " + error);
      }
    }, []);

    // iterate through student array to display select options
    function getStudentOptions() {
      return studentList.map((student) => {
        return <option key={student.id} value={student.id}>{student.firstName} {student.lastName}</option>;
      });

    };

    // iterate through tutor array to display select options
    function getTutorOptions() {
      return tutorList.map((tutor) => {
        return <option key={tutor.id} value={tutor.id}>{tutor.firstName} {tutor.lastName}</option>;
      });
    };

    // form inputs on change event handler (get values and store in useState)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    // handle radio button change
    const radioHandleChange = (event) => {
      if(event.target.value == "zoom") {
        setIsOnlineMeeting(true);
      } else if (event.target.value == "inperson") {
        setIsOnlineMeeting(false);
      } else {
        setIsOnlineMeeting(null);
      }
    }

    // confirm button on click event handler
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("Creating meeting.");

      // get student name and tutor name and email
      var studentName = "";
      var tutorName = "";
      var tutorEmail = ""

      studentList.forEach(student => {
        if (student.id == inputs.studentId) {
          studentName = student.firstName + " " + student.lastName;
        }
      });

      tutorList.forEach(tutor => {
        if (tutor.id == inputs.tutorId) {
          tutorName = tutor.firstName + " " + tutor.lastName;
          tutorEmail = tutor.email;
        }
      });

      //console.log("Inputs: " + JSON.stringify(inputs));

      // if zoom meeting
      if(isOnlineMeeting) {

        // get meeting data from form
        const meetingData = {
          topic: "Virtual lesson with student " + studentName + " and tutor " + tutorName,
          start_time: inputs.dateTime + ":00",  // match format required by Zoom API
          student_id: inputs.studentId,
          tutor_email: tutorEmail,  // allows tutor to start the meeting desping not being admin (WORKS ONLY WITH LICENSED ACCOUNTS)
          tutor_id: inputs.tutorId
        }

        // send data to backend
        try {
          await axios.post('http://localhost:3007/zoommeeting', meetingData)
              .then((response) => {
                console.log("API call successful. Meeting created.")
                //console.log("API call successful. Response data: " + JSON.stringify(response))
                window.alert("Zoom meeting successfully created!");
              }, (error) => {
                  console.log("Error occurred: " + error);
              });
        } catch (error) {
            console.log("API call failed" + error);
        }
      } else if(!isOnlineMeeting) {

        // get meeting data from form
        const meetingData = {
          start_time: inputs.dateTime + ":00",  // use consistend date format
          student_id: inputs.studentId,
          tutor_id: inputs.tutorId
        }

        // send data to backend
        try {
          await axios.post('http://localhost:3007/inpersonmeeting', meetingData)
              .then((response) => {
                console.log("API call successful. Meeting created.")
                //console.log("API call successful. Response data: " + JSON.stringify(response))
                window.alert("In-person meeting successfully created!");
              }, (error) => {
                  console.log("Error occurred: " + error);
              });
        } catch (error) {
            console.log("API call failed" + error);
        }
      }
    }

  return (
    <>
      <div className="dashboard-div-container">
        <h2>Create a new meeting</h2>
        <Form onSubmit={handleSubmit} >
            <label>STUDENT</label>
            <select
                name="studentId"
                value={inputs.studentId || ""}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Choose...</option>
                {getStudentOptions()}
            </select>
            <label htmlFor='for'>TUTOR</label>
            <select
                name="tutorId"
                value={inputs.tutorId || ""}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Choose...</option>
                {getTutorOptions()}
            </select>
            <label>DATE AND TIME</label>
            <input
                type="datetime-local"
                name="dateTime"
                value={inputs.dateTime || ""}
                onChange={handleChange}
                required
            />
            <label>METHOD</label>
            <div
              className="radio-method"
              onChange={radioHandleChange}>
              <label>
                <input type="radio" value="zoom" name="method" required /> Online (Zoom)
              </label>
              <label>
                <input type="radio" value="inperson" name="method" required /> In-person
              </label>
            </div>
            <ButtonContainer>
                <button className="styled-button" type='submit'>CONFIRM</button>
            </ButtonContainer>
        </Form>
      </div>
    </>
  );
}

export default CreateMeeting;

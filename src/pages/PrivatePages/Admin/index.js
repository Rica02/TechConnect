import React, { useEffect, useState } from "react";
import { DashboardContainer, StyledButton } from "../../PagesStyle";
import { ButtonContainer, Form } from "./AdminStyle";
import axios from "axios";

function Admin() {
    const [inputs, setInputs] = useState({});
    const [studentList, setStudentList] = useState([]);
    const [tutorList, setTutorList] = useState([]);

    const newDate = new Date(inputs.dateTime);

    // console.log("Student list: " + JSON.stringify(studentList));
    // console.log("Tutor list: " + JSON.stringify(tutorList));

    // on page load, get student and tutor data
    useEffect(() => {
      try {
         axios.post('http://localhost:3007/getusers')
            .then((response) => {
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
        return <option key={student.id} value={student.name}>{student.name}</option>;
      });
    };

    // iterate through tutor array to display select options
    function getTutorOptions() {
      return tutorList.map((tutor) => {
        return <option key={tutor.id} value={tutor.name}>{tutor.name}</option>;
      });
    };

    // form inputs on change event handler (get values and store in useState)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    // confirm button on click event handler
    const handleSubmit = async (event) => {
      event.preventDefault();
      // convert date string into Date type
      const date = new Date(inputs.dateTime);
      console.log("Inputs: " + JSON.stringify(inputs) + " New date: " + date);



      // get meeting data from form
      const meetingData = {
        //password: inputs.password,
        topic: "Virtual lesson with student " + inputs.student + " and tutor " + inputs.tutor,
        start_time: inputs.dateTime,
      }

      // send data to backend
      try {
        await axios.post('http://localhost:3007/meeting', meetingData)
            .then((response) => {
              console.log("API call successful. Response data: " + JSON.stringify(response))

              // TODO: redirect user to "successful meeting creation"

            }, (error) => {
                console.log("Error occurred: " + error);
            });
      } catch (error) {
          console.log("API call failed" + error);
      }
    }

  return (
    <>
      <DashboardContainer>
        <h2>Hello admin</h2>
        <h3>Create a new meeting</h3>
        <Form onSubmit={handleSubmit} >
            <label>Student</label>
            <select
                name="student"
                value={inputs.student || ""}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Choose...</option>
                {getStudentOptions()}
            </select>
            <label htmlFor='for'>Tutor</label>
            <select
                name="tutor"
                value={inputs.tutor || ""}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Choose...</option>
                {getTutorOptions()}
            </select>
            {/* <label>Meeting password</label>
            <input
                type='text'
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                required
            /> */}
            <label>Date and time</label>
            <input
                type="datetime-local"
                name="dateTime"
                value={inputs.dateTime || ""}
                onChange={handleChange}
            />
            <ButtonContainer>
                <StyledButton type='submit'>CONFIRM</StyledButton>
            </ButtonContainer>
        </Form>
      </DashboardContainer>
    </>
  );
}

export default Admin;

import React, { useEffect, useState } from "react";
import { DashboardContainer, StyledButton } from "../../PagesStyle";
import { ButtonContainer, Form } from "./AdminStyle";
import axios from "axios";

function Admin() {
    const [inputs, setInputs] = useState({});
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
      console.log("Use effect triggered");
      try {
         axios.post('http://localhost:3007/getusers')
            .then((response) => {
              //console.log("Get users successful. Response data: " + JSON.stringify(response))
              // dynamically populate select fields
              setStudentList(response.data.studentList)
              console.log("Student list:" + studentList);
            }, (error) => {
                console.log("Error occurred: " + error);
            });
      } catch (error) {
          console.log("Get users failed, reason: " + error);
      }
    }, []);


    function StudentOptions() {
      return (
        <>
          {/* <option selected hidden>Choose...</option> */}
          <option value="" disabled>Choose...</option>
          {studentList.map((student, index) => {
            <option key={index} value={student.id}>{student.name}</option>
          })}
        </>
        );
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);

      // get meeting data from form
      const meetingData = {
        //password: inputs.password,
        topic: "Virtual lesson with student " + inputs.student + " and tutor " + inputs.tutor,
        start_time: inputs.dateTime,
      }

      try {
        await axios.post('http://localhost:3007/meeting', meetingData)
            .then((response) => {
              console.log("API call successful. Response data: " + response)
              // redirect user to "successful meeting creation"
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
                //defaultValue={""}
            >
                {/* <option selected hidden>Choose...</option> */}
                {/* <option value="DEFAULT" disabled>Choose...</option> */}
                <StudentOptions />
            </select>
            <label htmlFor='for'>Tutor</label>
            <select
                name="tutor"
                value={inputs.tutor || ""}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Choose...</option>
                <option value="tutor 1">Tutor 1</option>
                <option value="tutor 2">Tutor 2</option>
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

import React, { useState } from "react";
import { DashboardContainer, StyledButton } from "../../PagesStyle";
import { ButtonContainer, Form } from "./AdminStyle";
import axios from "axios";

function Admin() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        // TODO: check that all fields are not empty
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        // Create meeting (must be called from back)

        const meetingData = {
            email: "techconnectweb@gmail.com",
            topic: inputs.title,
            password: inputs.password,
            schedule_for: "ricamaeaverion22@gmail.com",     // TODO: get email of tutor (must be added to TechConnect Zoom account)
            start_time: inputs.dateTime,
        }

        try {
          axios.post('http://localhost:3007/meeting', meetingData)
          .then((response) => {
            // let URL =
            // response.data.join_url.replaceAll(
            //   "https://us04web.zoom.us/j/",
            //   "http://localhost:3007/?"
            // ) + `?role=1?name=${username}`;
            // window.location.replace(`${URL}`);
            let URL = response.data.join_url;
            console.log(URL);
          }, (error) => {
            console.log('Zoom API failed: ' + error);

          });
        } catch (error) {
          console.log(error);
        }

      }

  return (
    <>
      <DashboardContainer>
        <h2>Hello admin</h2>
        <h3>Create a new meeting</h3>
        <Form onSubmit={handleSubmit} >
            <label>Student</label>
            {/* TODO: replace following code to fetch data from database*/}
            <select
                name="student"
                value={inputs.student || ""}
                onChange={handleChange}
                required
            >
                <option selected hidden>Choose...</option>
                <option value="student 1">Student 1</option>
                <option value="student 2">Student 2</option>
            </select>
            <label htmlFor='for'>Tutor</label>
            {/* TODO: replace following code to fetch data from database*/}
            <select
                name="tutor"
                value={inputs.tutor || ""}
                onChange={handleChange}
                required
            >
                <option selected hidden>Choose...</option>
                <option value="tutor 1">Tutor 1</option>
                <option value="tutor 2">Tutor 2</option>
            </select>
            <label>Meeting title</label>
            <input
                type='text'
                name="title"
                value={inputs.title || ""}
                onChange={handleChange}
                required
            />
            <label>Meeting password</label>
            <input
                type='text'
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                required
            />
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

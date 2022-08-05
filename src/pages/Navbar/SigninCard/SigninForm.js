import axios from "axios";
import { React, useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SigninStyle';
import { useDB } from '../../../ServerContext';
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap";
function SigninForm() {
  var navigate = useNavigate()
  const { setAuth, userSet } = useDB()
  const [formInput, setFormInput] = useState({
    email: "",
    password: ""
  })
  var handleForm = (e) => {
    var value = e.target.value
    //console.log(value);
    setFormInput({ ...formInput, [e.target.name]: value })
  }
  var loginFunction = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3007/login', {
        email: formInput.email,
        password: formInput.password,
      })
        .then((response) => {
          if (response.data.length >= 1) {
            console.log(response.data);
            localStorage.setItem('user', response.data[0])
            setAuth(response.data[0])
            userSet(response.data[0].email, response.data[0].admin)
            alert("succesfully login")
            navigate("/dashborad")
            window.location.reload()
          } else if (response.data.length < 1) {
            alert("no combination found")
          }
        }, (error) => {
          alert('error')
          console.log(error);
          alert("error")

        });
    } catch (error) {
      console.log(error);
    }
  }
  // var test = async () => {
  //   try {
  //     await axios.post('https://zoom.us/oauth/authorize?response_type=code&client_id=vw5sSJryRey9d1QUqWrzYw&redirect_uri=https://b56f-203-222-134-3.au.ngrok.io')
      
  //     .then((result) => {
  //       console.log(result);
  //     })


  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <>
      <FormH1>Enter your details to sign in</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput name="email" onChange={handleForm} type='email' required />
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' name="password" onChange={handleForm} required />
      <FormButton type='submit' onClick={(e) => loginFunction(e)}>SIGN IN</FormButton>
      {/* <Button onClick={() => test()}>Call API</Button> */}
    </>
  )
}

export default SigninForm

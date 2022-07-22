import axios from "axios";
import { React, useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SigninStyle';
function SigninForm() {

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
    //console.log(formInput.email + " " + formInput.password);
    await axios.post('http://localhost:3007/login', {
      email: formInput.email,
      password: formInput.password,
    })
      .then((response) => {
        if(response.data){
          var userEmail =response.data[0].email;
          var pw =response.data[0].password; 
          console.log("email: " + userEmail + " password: " + pw);
          localStorage.setItem('user', response.data[0])
          console.log(localStorage.getItem("user"));
        }
        
        debugger;
      }, (error) => {
        alert('error')
        console.log(error);
        alert("error")
        debugger
      });
  }
  return (
    <>
      <FormH1>Enter your details to sign in</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput name="email" onChange={handleForm} type='email' required />
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' name="password" onChange={handleForm} required />
      <FormButton type='submit' onClick={() => loginFunction()}>SIGN IN</FormButton>
    </>
  )
}

export default SigninForm

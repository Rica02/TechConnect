import axios from "axios";
import { React, useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SigninStyle';
function SignupForm() {
  const [formInput, setFormInput] = useState({
    email: "",
    password: ""
  })

  var handleForm = (e) => {
    var value = e.target.value
    setFormInput({ ...formInput, [e.target.name]: value })
    console.log(formInput);
  }
  var regFunction = async () => {
    console.log(formInput.email + " " + formInput.password);
    debugger
    await axios.post("http://localhost:3007/register", {
      email: formInput.email,
      password: formInput.password
    }).then((result, reject) => {
      if (result) {
        console.log(result);
        alert("succeeded register")
        debugger
      } else {
        console.log(reject)
        alert(reject)
      }
    })
  }
  return (
    <>
      <FormH1>Creat your account</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput onChange={handleForm} name="email" type='email' required />
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput onChange={handleForm} name="password" type='password' required />
      <FormLabel htmlFor='for'>Password confirm</FormLabel>
      <FormInput type='password' required />
      <FormButton type='submitSignUp' onClick={() => regFunction()}>continue</FormButton>
    </>
  )
}

export default SignupForm

import axios from "axios";
import { React, useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SigninStyle';
import { useNavigate } from "react-router-dom"
function SignupForm() {
  var navigate = useNavigate()
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    phone: "",
    passwordConfirm:"",
  })

  var handleForm = (e) => {
    var value = e.target.value
    setFormInput({ ...formInput, [e.target.name]: value })
    console.log(formInput);
  }

  var regFunction = async () => {
    if(formInput.password!==formInput.passwordConfirm){
      return  alert("password Confirm Different")
    }
    console.log("regFunction------------------");
    console.log(formInput.email + " " + formInput.password + " " + formInput.phone);
    debugger
    await axios.post("http://localhost:3007/register", {
      email: formInput.email,
      password: formInput.password,
      phone: formInput.phone,
    }).then((result, reject) => {
      console.log('result and reject');
      if (result) {
        console.log(result);
        alert("succeeded register")
        navigate("/home")
      } else {
        console.log(reject)
        alert(reject)
      }
    })
    console.log("END regFunction------------------");
  }
  return (
    <>
      <FormH1>Creat your account</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput onChange={handleForm} name="email" type='email' required />
      <FormLabel htmlFor='for'>Phone number</FormLabel>
      <FormInput onChange={handleForm} name="phone" type='tel' required />
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput onChange={handleForm} name="password" type='password' required />
      <FormLabel htmlFor='for'>Password confirm</FormLabel>
      <FormInput type='password' required name="passwordConfirm" onChange={handleForm}/>
      <FormButton type='submitSignUp' onClick={() => regFunction()}>continue</FormButton>
    </>
  )
}

export default SignupForm

import axios from "axios";
import React, { useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SigninStyle';
function PasswordForm() {
  const [IsDirect, setIsDirect] = useState(false)
  const [message, setMessage] = useState()


  const [formInput, setFormInput] = useState({
    email: "",
    phone: ""
  });
  //console.log(resetPassword);
  const handleInput = (e) => {
    var value = e.target.value
    setFormInput({ ...formInput, [e.target.name]: value })
    console.log(formInput);
  }

  const submitForm = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:3007/forgot-password", formInput).then((result, reject) => {
      if (result && result.status === 200)  {
        alert(result.data.message)
        // REDIRECT!!
        var url = result.data.result[0].password
        var cleanURL = url.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
        window.location.href = '/resetpassword/' + cleanURL;
        //window.location.href = '/resetpassword/' + url;
      }
      else if(result && result.status === 210) {
        console.log(result)
        alert(result.data.message)
      }
    })

  }
  return (
    <>
      <FormH1>Enter your details</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput type='email' name="email" onChange={(e) => handleInput(e)} required />
      <FormLabel htmlFor='for'>Phone Number</FormLabel>
      <FormInput type='phone' name="phone" onChange={(e) => handleInput(e)} required />
      {message && IsDirect ? <h3> {message}  </h3> : null}
      <FormButton type='submitSingIn' onClick={(e) => submitForm(e)}>SEND EMAIL</FormButton>
    </>
  )
}

export default PasswordForm

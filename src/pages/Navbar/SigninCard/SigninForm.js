import React, { useState } from "react";
import {
    FormButton,
    FormH1,
    FormInput,
    Text,
    FormLabel,
} from './SigninStyle';
function SigninForm() {
    const [toggleSignup,setToggleSignup] = useState(false);
  return (
    <>
      <FormH1>Enter your details to sign in</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput type='email' required/>
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' required/>
      <FormButton type='submitSingIn'>SIGN IN</FormButton>          
    </>
  )
}

export default SigninForm

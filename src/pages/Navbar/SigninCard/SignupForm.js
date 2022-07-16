import React from "react";
import {
    FormButton,
    FormH1,
    FormInput,
    FormLabel,
} from './SigninStyle';
function SignupForm() {
 
  return (
    <>
      <FormH1>Creat your account</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput type='email' required/>
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' required/>
      <FormLabel htmlFor='for'>Password confirm</FormLabel>
      <FormInput type='password' required/>
      <FormButton type='submitSignUp'>continue</FormButton>            
    </>
  )
}

export default SignupForm

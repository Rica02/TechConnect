import React from "react";
import {
    FormButton,
    FormH1,
    FormInput,
    FormLabel,
} from './SigninStyle';
function PasswordForm() {

  return (
    <>
      <FormH1>Enter your details</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput type='email' required/>
      <FormLabel htmlFor='for'>Phone Number</FormLabel>
      <FormInput type='phone' required/>
      <FormButton type='submitSingIn'>SEND EMAIL</FormButton>          
    </>
  )
}

export default PasswordForm

import axios from "axios";
import { React, useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  TableCell,
  Table
} from './SigninStyle';

function SignupForm() {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    fname: "",
    lname:"",
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

    debugger
    await axios.post("http://localhost:3007/register",formInput).then((result, reject) => {
      console.log(formInput.phone);
      if (result) {
        console.log(result);
        alert("succeeded register")

      } else {
        console.log(reject)
        alert(reject)
      }
    })
    console.log("END regFunction------------------");
  }
  return (
    <>
      <FormH1>Create your account</FormH1>
      <Table>
        <tr>
          <TableCell>
            <FormLabel htmlFor='for'>First Name</FormLabel>
            <FormInput onChange={handleForm} name="fname" type='text' required />
          </TableCell>
          <TableCell>
            <FormLabel htmlFor='for'>Last Name</FormLabel>
            <FormInput onChange={handleForm} name="lname" type='text' required />
          </TableCell>
          <TableCell>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput onChange={handleForm} name="email" type='email' required />
          </TableCell>
        </tr>
        <tr>
        <TableCell>
            <FormLabel htmlFor='for'>Phone number</FormLabel>
            <FormInput onChange={handleForm} name="phone" type='tel' required />
          </TableCell>
          <TableCell>
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput onChange={handleForm} name="password" type='password' required />
          </TableCell>
          <TableCell>
            <FormLabel htmlFor='for'>Password confirm</FormLabel>
            <FormInput type='password' required name="passwordConfirm" onChange={handleForm}/>
          </TableCell>
        </tr>
      </Table>
      <FormButton type='submitSignUp' onClick={() => regFunction()}>REGISTER</FormButton>
    </>
  )
}

export default SignupForm

import axios from "axios";
import {React,useState} from "react";
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
    setFormInput({...formInput, [e.target.name]: value})
  }
  var loginFunction = () => {
    //function to compare row of users with db 
  //  try {
  //   axios.get("http://localhost:3007/login", {
  //     email: formInput.email,
  //     password: formInput.password
  //   }).then((result, reject) => {
  //     if(result){
  //       console.log(result);
  //       alert ("succeeded login")
  //     }else{
  //       console.log(reject)
  //     }
  //   })
  //   debugger
  //  } catch (error) {
  //   console.log(error);
  //  }
  //  alert("submitted")
  
  // Testing function to login user 
  if(formInput.email == "email@com.com" && formInput.password == "password" ){
    alert("success")
  }else{
    alert("failed or wrong password")
  }
  }
  return (
    <>
      <FormH1>Enter your details to sign in</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput name = "email" onChange={handleForm} type='email' required />
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' name ="password" onChange={handleForm} required />
      <FormButton type='submit'>SIGN IN</FormButton>
    </>
  )
}

export default SigninForm

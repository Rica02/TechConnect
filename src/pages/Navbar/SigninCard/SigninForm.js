import axios from "axios";
import { React, useState } from "react";
import {
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
} from './SigninStyle';
import {useDB} from '../../../ServerContext';
import {useNavigate} from "react-router-dom"
function SigninForm() {
  var navigate = useNavigate()
 const {auth,setAuth}=useDB()

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
    
    //console.log(formInput.email + " " + formInput.password);
    try {
      await axios.post('http://localhost:3007/login', {
      email: formInput.email,
      password: formInput.password,
    })
      .then((response) => {
        if(response.data.length >=1 ){
          console.log(response.data);
        
          var userEmail =response.data[0].email;
          var pw =response.data[0].password; 
          console.log("email: " + userEmail + " password: " + pw);
          localStorage.setItem('user', response.data[0])
          setAuth(response.data[0])
          console.log(auth);
          alert("succesfully login")
          navigate("/dashborad")
        }else if(response.data.length < 1){
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
  return (
    <>
      <FormH1>Enter your details to sign in</FormH1>
      <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput name="email" onChange={handleForm} type='email' required />
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' name="password" onChange={handleForm} required />
      <FormButton type='submit' onClick={(e) => loginFunction(e)}>SIGN IN</FormButton>
    </>
  )
}

export default SigninForm

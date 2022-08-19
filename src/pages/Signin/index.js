import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Container,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormWrap,
    Icon,
    Form,
    FormLabel
} from './SigninStyle';
import { useDB } from '../../ServerContext';
function Signin() {
    // Function that navigates to a different route
    var navigate = useNavigate()
    const { setAuth, userSet } = useDB()
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
                    if (response.data.length >= 1) {
                        console.log(response.data);
                        localStorage.setItem('user', response.data[0])
                        setAuth(response.data[0])
                        console.log(response.data[0].id);
                        userSet(response.data[0].id,response.data[0].email, response.data[0].admin)
                        alert("succesfully login")
                        navigate("/dashboard")
                        window.location.reload()
                    } else if (response.data.length < 1) {
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
            <Container>
                <FormWrap>
                    <Icon to="/"></Icon>
                    <FormContent>
                        <Form >
                            <FormH1>Enter your details to sign in</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput name="email" onChange={handleForm} type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' name="password" onChange={handleForm} required />
                            <FormButton type='submit' onClick={(e) => loginFunction(e)}>SIGN IN</FormButton>
                            <FormButton onClick={() => navigate("/forgotPassword")}>Forgot password</FormButton>
                            <FormButton onClick={() => navigate("/signup")}>GO SIGN UP</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default Signin;

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

function Signup() {
    // Function that navigates to a different route
    let navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        phone: ""
    })

    var handleForm = (e) => {
        var value = e.target.value
        setFormInput({ ...formInput, [e.target.name]: value })
        console.log(formInput);
    }

    var regFunction = async () => {
        if (formInput.password !== formInput.passwordConfirm) {
            return alert("password Confirm Different")
        }
        console.log(formInput.email + " " + formInput.password);
        debugger
        await axios.post("http://localhost:3007/register", {
            email: formInput.email,
            password: formInput.password,
            phone: formInput.phone,
        }).then((result, reject) => {
            if (result) {
                alert("succeeded register")
                console.log(result);
            } else {
                console.log(reject)
                alert(reject)
            }
        })
    }
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"></Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput onChange={handleForm} name="email" type='email' required />
                            <FormLabel htmlFor='for'>Phone number</FormLabel>
                            <FormInput type='tel' required  name="phone" onChange={handleForm}/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput onChange={handleForm} name="password" type='password' required />
                            <FormLabel htmlFor='for'>Password confirm</FormLabel>
                            <FormInput type='password' required  name="passwordConfirm" onChange={handleForm}/>
                            <FormButton type='submitSignUp' onClick={() => regFunction()}>REGISTER</FormButton>
                            <FormButton onClick={() => navigate("/signin")}>GO SIGN IN</FormButton>
                        </Form>

                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default Signup;

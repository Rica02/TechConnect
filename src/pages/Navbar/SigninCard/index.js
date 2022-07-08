import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    FormButton,
    FormH1,
    FormInput,
    Text,
    Form ,
    FormLabel
} from './SigninStyle';

function Signin() {
    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
                <Container>
                    <Form action="#">
                        <FormH1>Enter your details to sign in</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submitSingIn'>SIGN IN</FormButton>
                        <Text>Forgot password</Text>
                        <FormButton type='submitSignUp'>SIGN UP</FormButton>
                    </Form>
                </Container>
        </>
    );
}

export default Signin;

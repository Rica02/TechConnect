import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormWrap,
    Icon,
    Form ,
    FormLabel
} from './SigninStyle';

function Signup() {
    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Container>
            <FormWrap>
                <Icon to="/"></Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required/>
                        <FormButton type='submitSignup'>SIGN UP</FormButton>
                        <FormButton onClick={ () => navigate("/signin") }>GO SIGN IN</FormButton>
                    </Form>

                </FormContent>
                <FormContent>


                </FormContent>
            </FormWrap>
            </Container>
        </>
    );
}

export default Signup;

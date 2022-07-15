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

function ForgotPassword() {
    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Container>
            <FormWrap>
                <Icon to="/"></Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Enter your details</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for'>Phone</FormLabel>
                        <FormInput type='phone' required/>
                        <FormButton type='submitSignUp'>SEND EMAIL</FormButton>
                        <FormButton onClick={ () => navigate("/signin") }>Back SIGN IN</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
            </Container>
        </>
    );
}

export default ForgotPassword;

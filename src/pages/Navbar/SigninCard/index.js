import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordForm from "./PasswordForm";
import SigninForm from "./SigninForm";
import {
    Container,
    FormButton,
    FormH1,
    FormInput,
    Text,
    Form ,
    FormLabel,
} from './SigninStyle';
import SignupForm from "./SignupForm";

function SigninCard() {
    // Function that navigates to a different route
    let navigate = useNavigate();
    const [toggleSignup,setToggleSignup] = useState(true);
    const [togglePassword,setTogglePassword] = useState(true);

    


    return (
        <>
                <Container>
                    <Form action="#">
                    {toggleSignup ? 
                        <>
                        {togglePassword ? <>
                            <SigninForm/>
                            <FormButton onClick={() => {setTogglePassword((value) => !value);}}>Forgot password</FormButton>
                            <FormButton onClick={() => {setToggleSignup((value) => !value);}}>GO SIGN UP </FormButton>
                            </> : <>
                            <PasswordForm/>
                            <FormButton onClick={() => {setTogglePassword((value) => !value);}}>GO SIGN UP </FormButton>
                            </>}   
                        
                        </> : <> 
                        <SignupForm/>
                        <FormButton onClick={() => {setToggleSignup((value) => !value);}}>GO SIGN IN</FormButton></>
                    }
                    </Form>
                </Container>
        </>
    );
}

export default SigninCard;

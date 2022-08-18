import React, { useState } from "react";
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
} from '../../Signin/SigninStyle';
import { useDB } from '../../../ServerContext';
function AccuntResetPassword() {
    // Function that navigates to a different route
    var navigate = useNavigate()
    const { ResetPassword, userInf, CheckPassword } = useDB()
    const [formInput, setFormInput] = useState({
        oldPassword: "",
        newPassword: "",
        newPasswordC: ""
    })
    var handleForm = (e) => {
        var value = e.target.value
        // console.log(value);
        setFormInput({ ...formInput, [e.target.name]: value })
    }
    var ResetFunction = async (e) => {
        e.preventDefault()
        if (formInput.newPassword !== formInput.newPasswordC) {
            alert("New Password not same")
            return;
        } else
            if (CheckPassword(userInf[0].id, formInput.oldPassword)) {
                //update with password
                ResetPassword(userInf[0].id, formInput.newPassword)
                return;
            } else {
                alert("Old Password not correct")
                return;
            }
    }
    return (
        <>
            <Container>

                <FormWrap>
                    <Icon to="/"></Icon>
                    <FormContent>
                        <Form >
                            <FormH1>Reset Password</FormH1>
                            <FormLabel htmlFor='for'>Old password</FormLabel>
                            <FormInput type='password' name="oldPassword" onChange={handleForm} required />
                            <FormLabel htmlFor='for'>New Password</FormLabel>
                            <FormInput type='password' name="newPassword" onChange={handleForm} required />
                            <FormLabel htmlFor='for'>New Password confirm</FormLabel>
                            <FormInput type='password' name="newPasswordC" onChange={handleForm} required />
                            <FormButton type='submit' onClick={(e) => ResetFunction(e)}>Reset</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default AccuntResetPassword

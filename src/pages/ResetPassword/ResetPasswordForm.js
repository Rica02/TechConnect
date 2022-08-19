import { React, useState } from 'react'
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import axios from 'axios';


function ResetPasswordForm() {
    const resetPasswordId = useParams()

    const [formInput, setFormInput] = useState({
        email: "",
        password: ""
    });
    //console.log(resetPassword);
    const handleInput = (e) => {
        var value = e.target.value
        setFormInput({ ...formInput, [e.target.name]: value })
        console.log(formInput);
    }
    const changePassword = async(e) => {
        e.preventDefault()
        await axios.post("http://localhost:3007/api/resetpassword",formInput).then ((result, reject) => {
            if(result) {
                window.location.href = 'http://localhost:3000'
            }

        })
    }
    return (
        <div>
            <ResetForm>
                <h3> Reset Password</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email </label>
                    <input type="email" name = "email" onChange={(e) => handleInput(e)} className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input type="password" name = "password" onChange={(e) => handleInput(e)} className="form-control" placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                </div>
                <div className="form-check">
                </div>
                <button type="submit" onClick={(e) => changePassword(e)} className="btn btn-primary">Reset</button>
            </ResetForm>
        </div>
    );
}
const ResetForm = styled.form`
        max-width: 60%;
        margin: 1rem auto;
    `
export default ResetPasswordForm;

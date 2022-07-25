import React from "react";
import { FormContainer, FormItemContainer, FormNameContainer } from "./FormStyle";
import { StyledButton, StyledContainer } from "../../../PagesStyle";
import axios from "axios"

export default function Form() {

    const [formInput, setFormInput] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    var Register = async (e, req, res) => {
        e.preventDefault();
        console.log(formInput.email, formInput.password);
        const dataPost = {
            email: formInput.email,
            password: formInput.password
        };
        try {
            console.log(formInput.email, formInput.password);
            await axios.post("http://localhost:3007/register",
                dataPost
            ).then((res) => {
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }
        alert("Submitted")
        console.log("------------" + req);
    }

    var handleRegisterForm = (event) => {
        var value = event.target.value
        setFormInput({
            ...formInput, [event.target.name]: value
        })
    }
    //console.log(formInput.firstname + formInput.lastname + formInput.email, formInput.password);
    return (

        <StyledContainer>
            <FormContainer>
                <FormNameContainer>
                    <FormItemContainer>
                        <label htmlFor="exampleFormControlInput1">First name (required)</label>
                        <input onChange={handleRegisterForm} name="firstname" type="text" value={formInput.firstname} className="form-control" id="exampleFormControlInput5" placeholder="First name" />
                    </FormItemContainer>
                    <FormItemContainer>
                        <label htmlFor="exampleFormControlInput1">Last name (required)</label>
                        <input onChange={handleRegisterForm} name="lastname" type="text" value={formInput.lastname} className="form-control" id="exampleFormControlInput3" placeholder="Last name" />
                    </FormItemContainer>
                </FormNameContainer>
                <FormItemContainer>
                    <label htmlFor="exampleFormControlInput1">Postcode or city (required)</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Start typing your postcode or city name" />
                </FormItemContainer>
                <FormItemContainer>
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" onChange={handleRegisterForm} name="email" className="form-control" value={formInput.email} id="exampleFormControlInput2" placeholder="name@example.com" />
                </FormItemContainer>
                <FormItemContainer>
                    <label htmlFor="exampleFormControlInput1">Password</label>
                    <input className="form-control" type="password" name="password" onChange={handleRegisterForm} value={formInput.password} placeholder="Password" />
                </FormItemContainer>

                <FormItemContainer>
                    <label htmlFor="exampleFormControlSelect1">What would you like to do? (required)</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="default">Click to select an option</option>
                        <option value="find-tutor">I want to find a tutor or learn more about about TechConnect's services</option>
                        <option value="become-tutor">I want to equire about becoming a tutor</option>
                        <option value="business-enquiry">Business enquiries</option>
                    </select>
                </FormItemContainer>
                <FormItemContainer>
                    <label htmlFor="exampleFormControlTextarea1">What would you like to know?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us more about yourself"></textarea>
                </FormItemContainer>
            </FormContainer>
            <StyledButton onClick={(e) => Register(e)}> SEND</StyledButton>
        </StyledContainer>
    )
}

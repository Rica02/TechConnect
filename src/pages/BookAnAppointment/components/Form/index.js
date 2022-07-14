import React from "react";
import { FormContainer, FormItemContainer, FormNameContainer } from "./FormStyle";
import { StyledButton, StyledContainer } from "../../../PagesStyle";

export default function Form() {
    return (
        <StyledContainer>
            <FormContainer>
                <FormNameContainer>
                    <FormItemContainer>
                        <label for="exampleFormControlInput1">First name (required)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First name" />
                    </FormItemContainer>
                    <FormItemContainer>
                        <label for="exampleFormControlInput1">Last name (required)</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last name" />
                    </FormItemContainer>
                </FormNameContainer>
                <FormItemContainer>
                    <label for="exampleFormControlInput1">Postcode or city (required)</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Start typing your postcode or city name" />
                </FormItemContainer>
                <FormItemContainer>
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </FormItemContainer>
                <FormItemContainer>
                    <label for="exampleFormControlSelect1">What would you like to do? (required)</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="" disabled selected>Select an option</option>
                        <option value="find-tutor">I want to find a tutor or learn more about about TechConnect's services</option>
                        <option value="become-tutor">I want to equire about becoming a tutor</option>
                        <option value="business-enquiry">Business enquiries</option>
                    </select>
                </FormItemContainer>
                <FormItemContainer>
                    <label for="exampleFormControlTextarea1">What would you like to know?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us more about yourself"></textarea>
                </FormItemContainer>
            </FormContainer>
            <StyledButton>SEND</StyledButton>
        </StyledContainer>
    )
}

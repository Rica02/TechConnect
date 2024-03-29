import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./ByEmailPhoneStyle";

export default function ByEmailPhone(){
    let navigate = useNavigate();
    return(
        <Container>
            <div>
                <h2>By email</h2>
                <p>Send us an email at <a href="mailto:someone@yoursite.com">email@sample.com</a><br/>or use our <button onClick={() => navigate("/bookanappointment")}>form</button></p>
            </div>
            <div>
                <h2>By phone</h2>
                <p>Call us at <a href="tel:000-000-0000">000-000-0000</a></p>
            </div>
        </Container>
    )
}

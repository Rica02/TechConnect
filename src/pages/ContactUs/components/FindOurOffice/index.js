import React from "react";
import GoogleMaps from "../GoogleMaps";
import { Container } from "./FindOurOfficeStyle";

export default function FindOurOffice(){

    return(
        <Container>
            <h2>Find our office</h2>
            <p># Street Address, City, STATE, 0000</p>
            <GoogleMaps />
        </Container>
    )
}

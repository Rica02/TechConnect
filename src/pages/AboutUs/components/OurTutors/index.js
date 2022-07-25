import React from "react";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { StyledContainer, StyledButton } from "../../../PagesStyle";
import { GridContainer, GridItem } from "./OurTutorsStyle";

// "Meet our tutors" section. Present in Home and About Us pages
export default function OurTutors(props) {
    // Function that navigates to a different route
    let navigate = useNavigate();
    console.log(props.tutorsData);

    return (
        <StyledContainer bgColor={props.bgColor}>
            <h2>Meet our tutors</h2>
            {/* Display tutors in a grid using the tutors array*/}
            <GridContainer>
                {
                    props.tutorsData.map((tutor, index) => (
                        <GridItem key={index}>
                            <div><img src={tutor.url} alt="tutor" /></div>
                            <p>
                                <b>{tutor.firstname}</b> <br />
                                {tutor.addressline1} <br />{tutor.suburb} <br />
                                {tutor.qualification}<br />
                            </p>
                        </GridItem>
                    ))}
            </GridContainer>
            <StyledButton onClick={() => navigate("/becomeatutor")}>WANT TO JOIN OUR TEAM?</StyledButton>
        </StyledContainer>
    )
}

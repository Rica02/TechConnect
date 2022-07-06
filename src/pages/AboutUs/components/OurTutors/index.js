import React from "react";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { StyledContainer, StyledButton } from "../../../PagesStyle";
import { GridContainer, GridItem } from "./OurTutorsStyle";

// "Meet our tutors" section. Present in Home and About Us pages
export default function OurTutors(props) {
    // Function that navigates to a different route
    let navigate = useNavigate();

    return(
        <StyledContainer color={ props.color }>
            <h2>Meet our tutors</h2>

            {/* Display tutors in a grid using the tutors array*/}
            <GridContainer>
                {props.TutorList.map((tutor, index)=> (
                    <GridItem key={index}>
                        <img src={tutor.url} />
                        <p>{tutor.name}<br/>
                            {tutor.location}<br/>
                            {tutor.qualification}<br/>
                        </p>
                    </GridItem>
                ))}
            </GridContainer>
            <StyledButton onClick={ () => navigate("/becomeatutor") }>WANT TO JOIN OUR TEAM?</StyledButton>
        </StyledContainer>
    )
}

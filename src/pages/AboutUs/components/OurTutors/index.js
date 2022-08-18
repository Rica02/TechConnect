import React from "react";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { GridContainer, GridItem } from "./OurTutorsStyle";

// "Meet our tutors" section. Present in Home and About Us pages
export default function OurTutors(props) {
    // Function that navigates to a different route
    let navigate = useNavigate();
    console.log(props.tutorsData);

    return (
        <div className="public-div-container" style={{ backgroundColor: props.bg }}>
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
            <button className="styled-button" onClick={() => navigate("/becomeatutor")}>WANT TO JOIN OUR TEAM?</button>
        </div>
    )
}

import React from "react";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { GridContainer, GridItem } from "./OurTutorsStyle";
import { OurTutorsArticle } from "../../../ArticleData.js"

// "Meet our tutors" section. Present in Home and About Us pages
export default function OurTutors(props) {

    let navigate = useNavigate();

    return (
        <div className="public-div-container" style={{ backgroundColor: props.bg }}>
            <h2>Meet our tutors</h2>
            {/* Display tutors in a grid using the tutors array*/}
            <GridContainer>
                {
                    OurTutorsArticle.TutorList.map((tutor, index) => (
                        <GridItem key={index}>
                            <div><img src={tutor.url} alt="tutor" /></div>
                            <p>
                                <b>{tutor.name}</b><br />
                                {tutor.location}<br />
                                {tutor.qualification}<br />
                            </p>
                        </GridItem>
                    ))}
            </GridContainer>
            <button className="styled-button" onClick={() => navigate("/becomeatutor")}>WANT TO JOIN OUR TEAM?</button>
        </div>
    )
}

import React from "react";
import { StyledContainer } from "../styles/PageComponents.style";
import { RiComputerFill, RiTeamFill } from "react-icons/ri";
import { FaHome, FaSmile } from "react-icons/fa";
import 'react-slideshow-image/dist/styles.css';
import tutorImg1 from "../assets/images/tutor-1.jpg";
import tutorImg2 from "../assets/images/tutor-2.jpg";
import tutorImg3 from "../assets/images/tutor-3.jpg";
import tutorImg4 from "../assets/images/tutor-4.jpg";
import tutorImg5 from "../assets/images/tutor-5.jpg";
import tutorImg6 from "../assets/images/tutor-6.jpg";

/* This file contains page sections that are common to multiple pages of the website. They take a
    "color" prop that defines the background color of the section (either white or light beige). */

// "What do we do?" section. Present in Home and Our Services pages
export function WhatWeDo(props) {
    return (
        <StyledContainer color={ props.color }>
            <h2>What do we do?</h2>
            <div class="grid-container-what-we-do">
                <div class="grid-item">
                    <div class="icon-container">
                        <RiComputerFill class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <div class="icon-container">
                        <RiTeamFill class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <div class="icon-container">
                        <FaHome class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <div class="icon-container">
                        <FaSmile class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
            </div>
        </StyledContainer>
    )
}

// "Meet our tutors" section. Present in Home and About Us pages
export function OurTutors(props) {

    // Array that contains tutor info to display
    const ourTutors = [
        {
            url: tutorImg1,
            name: 'First name',
            location: 'Melbourne, VIC',
            qualification: 'Qualifications'
        },
        {
            url: tutorImg2,
            name: 'First name',
            location: 'Sydney, NSW',
            qualification: 'Qualifications'
        },
        {
            url: tutorImg3,
            name: 'First name',
            location: 'Sydney, NSW',
            qualification: 'Qualifications'
        },
        {
            url: tutorImg4,
            name: 'First name',
            location: 'Perth, WA',
            qualification: 'Qualifications'
        },
        {
            url: tutorImg5,
            name: 'First name',
            location: 'Brisbane, QLD',
            qualification: 'Qualifications'
        },
        {
            url: tutorImg6,
            name: 'First name',
            location: 'Melbourne, VIC',
            qualification: 'Qualifications'
        }
    ]

    return(
        <StyledContainer color={ props.color }>
            <h2>Meet our tutors</h2>

            {/* Display tutors in a grid using the tutors array*/}
            <div class="grid-container-tutors">
                {ourTutors.map((tutor, index)=> (
                    <div class="grid-item" key={index}>
                        <img src={tutor.url} />
                        <p>{tutor.name}<br/>
                            {tutor.location}<br/>
                            {tutor.qualification}<br/>
                        </p>
                    </div>
                ))}
            </div>
        </StyledContainer>
    )
}

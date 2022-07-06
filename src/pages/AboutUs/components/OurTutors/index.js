import React from "react";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { StyledContainer } from "../../../PagesStyle";
import tutorImg1 from "../../../../assets/images/tutor-1.jpg";
import tutorImg2 from "../../../../assets/images/tutor-2.jpg";
import tutorImg3 from "../../../../assets/images/tutor-3.jpg";
import tutorImg4 from "../../../../assets/images/tutor-4.jpg";
import tutorImg5 from "../../../../assets/images/tutor-5.jpg";
import tutorImg6 from "../../../../assets/images/tutor-6.jpg";

// "Meet our tutors" section. Present in Home and About Us pages
export default function OurTutors(props) {
    // Function that navigates to a different route
    let navigate = useNavigate();

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
            <button onClick={ () => navigate("/becomeatutor") }>WANT TO JOIN OUR TEAM?</button>
        </StyledContainer>
    )
}

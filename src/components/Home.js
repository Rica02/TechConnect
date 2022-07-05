import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader, StyledButton, StyledContainer, StyledSlideshowContainer } from "../styles/PageComponents.style";
import { RiComputerFill, RiTeamFill } from "react-icons/ri";
import { FaHome, FaSmile } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';

function Home() {

    const ourTutors = [
        {
            //url: [image url],
            name: 'First name',
            location: 'Melbourne, VIC',
            qualification: 'Qualifications'
        },
        {
            //url: [image url],
            name: 'First name',
            location: 'Sydney, NSW',
            qualification: 'Qualifications'
        },
        {
            //url: [image url],
            name: 'First name',
            location: 'Sydney, NSW',
            qualification: 'Qualifications'
        },
        {
            //url: [image url],
            name: 'First name',
            location: 'Perth, WA',
            qualification: 'Qualifications'
        },
        {
            //url: [image url],
            name: 'First name',
            location: 'Brisbane, QLD',
            qualification: 'Qualifications'
        },
        {
            //url: [image url],
            name: 'First name',
            location: 'Melbourne, VIC',
            qualification: 'Qualifications'
        }
    ]


    // Array of image + caption to be used in Testimonial section
    const testimonalsSlides = [
        {
            url: '/images/home-testimonial-1.jpg',
            caption: '"Great experience! My tutor was so kind and patient, it didn\'t take long for me to learn."'
          },
          {
            url: '/images/home-testimonial-2.jpg',
            caption: '"I thought I could never keep up with all this technology, but thanks to my tutor John, I can now easily video call with my grandchildren abroad."'
          }
    ];

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            {/* Header */}
            <HomeHeader>
                <div class="headerWrapper">
                    <div class="headerUpperContainer" >
                        <h1>Let's connect</h1>
                        <p>We provide one-on-one tutoring on how to use your digital devices and navigate
                            the Internet. Our goal is to teach you how to connect with friends, family and
                            the rest of the Web world.</p>
                    </div>
                    <div class="headerLowerContainer">
                        <StyledButton onClick={ () => navigate("/contactus") }>CLICK HERE TO FIND A TUTOR</StyledButton>
                        <p>Or call us at <a href="tel:#">000-000-0000</a></p>
                    </div>
                </div>
            </HomeHeader>
            {/* End of Header */}

            {/* Main body */}
            <div>
                {/* What do we do? */}
                <StyledContainer color={ ({ theme }) => theme.colorMain.backgroundLight }>
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
                 {/* End of What do we do? */}

                {/* Meet our tutors */}
                <StyledContainer color={ ({ theme }) => theme.colorMain.backgroundDark }>
                    <h2>Meet our tutors</h2>
                    <div class="grid-container-tutors">
                          {ourTutors.map((tutor, index)=> (
                            <div class="grid-item" key={index}>
                                <p>{tutor.name}<br/>
                                    {tutor.location}<br/>
                                    {tutor.qualification}<br/>
                                </p>
                            </div>
                         ))}
                    </div>
                </StyledContainer>
                {/* End of Meet our tutors */}

                {/* Testimonials */}
                <StyledSlideshowContainer color={ ({ theme }) => theme.colorMain.backgroundLight }>
                    <h2>Testimonials</h2>
                    <Slide>
                        {testimonalsSlides.map((testimonalsSlide, index)=> (
                            <div className="each-slide" key={index}>
                                <span>{testimonalsSlide.caption}</span>
                                <img src={testimonalsSlide.url} />
                            </div>
                        ))}
                    </Slide>
                </StyledSlideshowContainer>
                 {/* What do we do? */}
            </div>
            {/* End of Main body */}
        </>
    );
}

export default Home;

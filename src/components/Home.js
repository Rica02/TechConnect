import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader, StyledButton, StyledSlideshowContainer } from "./styles/PageComponents.style";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { OurTutors, WhatWeDo } from "./PageContent/PageSections";
import headerBanner from "../assets/images/home-banner.jpg";
import testimonialImg1 from "../assets/images/home-testimonial-1.jpg";
import testimonialImg2 from "../assets/images/home-testimonial-2.jpg";

function Home() {
    // Array of image + caption to be used in Testimonial section
    const testimonalsSlides = [
        {
            url: testimonialImg1,
            caption: '"Great experience! My tutor was so kind and patient, it didn\'t take long for me to learn."'
          },
          {
            url: testimonialImg2,
            caption: '"I thought I could never keep up with all this technology, but thanks to my tutor John, I can now easily video call with my grandchildren abroad."'
          }
    ];

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            {/* Header */}
            <HomeHeader headerBanner={headerBanner}>
                <div class="headerWrapper">
                    <div class="headerUpperContainer" >
                        <h1>Let's connect</h1>
                        <p>We provide one-on-one tutoring on how to use your digital devices and navigate
                            the Internet. Our goal is to teach you how to connect with friends, family and
                            the rest of the Web world.</p>
                    </div>
                    <div class="headerLowerContainer">
                        <StyledButton onClick={ () => navigate("/bookanappointment") }>CLICK HERE TO FIND A TUTOR</StyledButton>
                        <p>Or call us at <a href="tel:#">000-000-0000</a></p>
                    </div>
                </div>
            </HomeHeader>
            {/* End of Header */}

            {/* Main body */}
            <div>
                {/* What do we do section */}
                <WhatWeDo color={ ({ theme }) => theme.colorMain.backgroundLight }/>

                {/* Meet our tutors section */}
                <OurTutors color={ ({ theme }) => theme.colorMain.backgroundDark } />

                {/* Testimonials section */}
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
            </div>
            {/* End of Main body */}
        </>
    );
}

export default Home;

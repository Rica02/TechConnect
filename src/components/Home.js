import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader, StyledButton, StyledContainer } from "../styles/PageComponents.style";
import { RiComputerFill, RiTeamFill } from "react-icons/ri";
import { FaHome, FaSmile } from "react-icons/fa";

function Home() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
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
            <div>
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
                <StyledContainer color={ ({ theme }) => theme.colorMain.backgroundDark }>

                    {/* TO BE DECIDED: should this section be hard coded or dynamic? */}

                    <h2>Meet our tutors</h2>
                    <div class="grid-container-tutors">
                        <div class="grid-item">
                            <p>First name<br/>
                                City, STATE<br/>
                                Qualifications<br/>
                            </p>
                        </div>
                        <div class="grid-item">
                            <p>First name<br/>
                                City, STATE<br/>
                                Qualifications<br/>
                            </p>
                        </div>
                        <div class="grid-item">
                            <p>First name<br/>
                                City, STATE<br/>
                                Qualifications<br/>
                            </p></div>
                        <div class="grid-item">
                            <p>First name<br/>
                                City, STATE<br/>
                                Qualifications<br/>
                            </p>
                        </div>
                        <div class="grid-item">
                            <p>First name<br/>
                                City, STATE<br/>
                                Qualifications<br/>
                            </p>
                        </div>
                        <div class="grid-item">
                            <p>First name<br/>
                                City, STATE<br/>
                                Qualifications<br/>
                            </p>
                        </div>
                    </div>
                </StyledContainer>
                <StyledContainer color={ ({ theme }) => theme.colorMain.backgroundLight }>
                    <h2>Testimonials</h2>
                </StyledContainer>
            </div>
        </>
    );
}

export default Home;

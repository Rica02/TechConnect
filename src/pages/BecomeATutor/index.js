import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import headerBanner from "../../assets/images/become-a-tutor-banner.jpg";
import { LowerContainer, UpperContainer } from "./BecomeATutorStyle";
import { BecomeATutorArticle } from "../ArticleData";
import BecomeTutorImg from "../../assets/images/become-a-tutor-1.jpg";

function BecomeATutor() {
    // Function that navigates to a different route
    let navigate = useNavigate();
    const FirstArticle = BecomeATutorArticle.FirstArticle;
    const SecondArticle = BecomeATutorArticle.SecondArticle;

    return (
        <>
            <Header headerTitle={"Become a tutor"} headerBanner={headerBanner} />
            <div className="public-div-container" bgColor={({ theme }) => theme.colorMain.backgroundLight} >
                <UpperContainer>
                    <p>{FirstArticle}</p>
                    <button className="styled-button" onClick={ () => navigate("/bookanappointment") }>JOIN OUR TEAM</button>
                </UpperContainer>
                <LowerContainer>
                    <div>
                        <h3>What we will expect from you</h3>
                        <p>{SecondArticle}</p>
                    </div>
                    <img src={BecomeTutorImg} alt="tutoring example" />
                </LowerContainer>
            </div>

        </>
    );
}

export default BecomeATutor;

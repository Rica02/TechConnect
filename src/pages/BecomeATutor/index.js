import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import headerBanner from "../../assets/images/become-a-tutor-banner.jpg";
<<<<<<< HEAD
=======
import { StyledContainer, StyledButton } from "../PagesStyle";
import { LowerContainer, UpperContainer } from "./BecomeATutorStyle";
import { BecomeATutorArticle } from "../ArticleData";
import BecomeTutorImg from "../../assets/images/become-a-tutor-1.jpg";
>>>>>>> 5e8966ee7fd6b4cea50cb86bac547b4926972a24

function BecomeATutor() {
    // Function that navigates to a different route
    let navigate = useNavigate();
<<<<<<< HEAD
=======
    const FirstArticle = BecomeATutorArticle.FirstArticle;
    const SecondArticle = BecomeATutorArticle.SecondArticle;
>>>>>>> 5e8966ee7fd6b4cea50cb86bac547b4926972a24

    return (
        <>
            <Header headerTitle={"Become a tutor"} headerBanner={headerBanner} />
<<<<<<< HEAD
            <button onClick={ () => navigate("/contactus") }>JOIN UR TEAM</button>
=======
            <StyledContainer color={({ theme }) => theme.colorMain.backgroundLight} >
                <UpperContainer>
                    <p>{FirstArticle}</p>
                    <StyledButton onClick={ () => navigate("/contactus") }>JOIN UR TEAM</StyledButton>
                </UpperContainer>
                <LowerContainer>
                    <div>
                        <h3>What we will expect from you</h3>
                        <p>{SecondArticle}</p>
                    </div>
                    <img src={BecomeTutorImg} />
                </LowerContainer>
            </StyledContainer>

>>>>>>> 5e8966ee7fd6b4cea50cb86bac547b4926972a24
        </>
    );
}

export default BecomeATutor;

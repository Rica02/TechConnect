import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import {Container, Container2, ContentText, Img, ImgText, ImgWrap, JoinButton, TextH1, TextH2} from './AboutUsStyle';
import TeamImg from "../../assets/team.jpg";
function AboutUs() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"About us"} />
            <Container>
                <TextH2>About our team</TextH2>
                <ContentText ></ContentText>
                <ImgWrap>
                    <Img src={TeamImg}/>
                    <ImgText>A photo of our team</ImgText>
                </ImgWrap>
                
            </Container>
            <Container2>
                 <TextH1>Our mission</TextH1>
                 <ContentText >article</ContentText>
                 
            </Container2>
            <Container>
                <TextH1>Meet our Tutors</TextH1>
                <JoinButton  onClick={ () => navigate("/becomeatutor")}> WANT TO JOIN OUR TEAM?</JoinButton>
            </Container>
        </>
    );
}

export default AboutUs;

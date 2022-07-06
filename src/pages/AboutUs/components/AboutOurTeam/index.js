import React from 'react'
import { Container, ContainerWrap, TextH2, ContentText, ImgWrap, Img, ImgText } from './AboutOurTeamStyle'
import TeamImg from "../../../../assets/images/about-us-our-team.jpg";

const AboutOurTeam = ({SubTitle,Articel}) => {
  return (
    <>
        <Container>
            <ContainerWrap>
              <TextH2>{SubTitle}</TextH2>
              <ContentText >{Articel}</ContentText>
              <ImgWrap>
                <Img src={TeamImg}/>
                <ImgText>A photo of our team</ImgText>
              </ImgWrap>
            </ContainerWrap>
        </Container>
    </>
  )
}

export default AboutOurTeam

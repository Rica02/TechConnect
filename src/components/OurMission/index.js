import React from 'react'
import { Container, ContainerWrap,TextH1,ContentText } from './OurMissionStyle';


const OurMission = ({Articel}) => {
  return (
    <>
    <Container>
        <ContainerWrap>
            <TextH1>Our mission</TextH1>
            <ContentText >{Articel}</ContentText>
        </ContainerWrap>
    </Container>
    </>
  );
}

export default OurMission

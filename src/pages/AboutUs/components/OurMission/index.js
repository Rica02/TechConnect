import React from 'react'
import { Container, ContainerWrap, TextH2, ContentText } from './OurMissionStyle';

const OurMission = ({Article}) => {
  return (
    <>
      <Container>
          <ContainerWrap>
              <TextH2>Our mission</TextH2>
              <ContentText >{Article}</ContentText>
          </ContainerWrap>
      </Container>
    </>
  );
}

export default OurMission

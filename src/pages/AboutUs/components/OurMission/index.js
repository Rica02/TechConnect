import React from 'react'
import { Container, ContainerWrap, TextH1, ContentText } from './OurMissionStyle';

const OurMission = ({Article}) => {
  return (
    <>
      <Container>
          <ContainerWrap>
              <TextH1>Our mission</TextH1>
              <ContentText >{Article}</ContentText>
          </ContainerWrap>
      </Container>
    </>
  );
}

export default OurMission

import React from 'react'
import { CardContainer, Container, TextH2 } from './WhatCanWeTeachYouStyle';
import Card from './Card';
import {cardImg1, cardImg2, cardImg3, cardImg4, cardImg5,cardImg6, cardImg7, cardImg8, cardImg9} from "./Card/imgData";
function WhatCanWeTeachYou() {
  return (
    <>
    <Container>
        <TextH2>What Can We Teach You</TextH2>

    </Container>
    <Container>
        <CardContainer>
           <Card {...cardImg1}></Card>
           <Card {...cardImg2}></Card>
           <Card {...cardImg3}></Card>
        </CardContainer>
        <CardContainer>
           <Card {...cardImg4}></Card>
           <Card {...cardImg5}></Card>
           <Card {...cardImg6}></Card>
        </CardContainer>
        <CardContainer>
           <Card {...cardImg7}></Card>
           <Card {...cardImg8}></Card>
           <Card {...cardImg9}></Card>
        </CardContainer>
    </Container>
    </>
  )
}

export default WhatCanWeTeachYou

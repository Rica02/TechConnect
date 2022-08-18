import React from 'react'
import { CardContainer } from './WhatCanWeTeachYouStyle';
import Card from './Card';
import { cardImg1, cardImg2, cardImg3, cardImg4, cardImg5,cardImg6, cardImg7, cardImg8, cardImg9 } from "./Card/imgData";

function WhatCanWeTeachYou(props) {
  return (
    <>
      <div className="public-div-container" style={{ backgroundColor: props.bg }} >
         <h2>What we can teach you</h2>
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
      </div>
    </>
  )
}

export default WhatCanWeTeachYou

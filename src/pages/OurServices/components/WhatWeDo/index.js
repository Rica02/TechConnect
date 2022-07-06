import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { StyledContainer } from "../../../PagesStyle";
import { RiComputerFill, RiTeamFill } from "react-icons/ri";
import { FaHome, FaSmile } from "react-icons/fa";
import { GridContainer, IconContainer } from "./WhatWeDoStyle";

// "What do we do?" section. Present in Home and Our Services pages
export default function WhatWeDo(props) {
    return (
        <StyledContainer color={props.color}>
            <h2>What do we do?</h2>
            <GridContainer>
                <div class="grid-item">
                    <IconContainer>
                        <RiComputerFill class="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <IconContainer>
                        <RiTeamFill class="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <IconContainer>
                        <FaHome class="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <IconContainer>
                        <FaSmile class="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
            </GridContainer>
        </StyledContainer>
    )
}

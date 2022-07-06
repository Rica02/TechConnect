import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { StyledContainer } from "../../../PagesStyle";
import { RiComputerFill, RiTeamFill } from "react-icons/ri";
import { FaHome, FaSmile } from "react-icons/fa";

// "What do we do?" section. Present in Home and Our Services pages
export default function WhatWeDo(props) {
    return (
        <StyledContainer color={ props.color }>
            <h2>What do we do?</h2>
            <div class="grid-container-what-we-do">
                <div class="grid-item">
                    <div class="icon-container">
                        <RiComputerFill class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <div class="icon-container">
                        <RiTeamFill class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <div class="icon-container">
                        <FaHome class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div class="grid-item">
                    <div class="icon-container">
                        <FaSmile class="icon" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
            </div>
        </StyledContainer>
    )
}

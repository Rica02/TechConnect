import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { RiComputerFill, RiTeamFill } from "react-icons/ri";
import { FaHome, FaSmile } from "react-icons/fa";
import { GridContainer, IconContainer } from "./WhatWeDoStyle";

// "What do we do?" section. Present in Home and Our Services pages
export default function WhatWeDo(props) {
    return (
        <div className="public-div-container" bgColor={props.bgColor}>
            <h2>What do we do?</h2>
            <GridContainer>
                <div className="grid-item">
                    <IconContainer>
                        <RiComputerFill className="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div className="grid-item">
                    <IconContainer>
                        <RiTeamFill className="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div className="grid-item">
                    <IconContainer>
                        <FaHome className="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
                <div className="grid-item">
                    <IconContainer>
                        <FaSmile className="icon" />
                    </IconContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida,
                        neque vitae ultricies mollis, nulla arcu commodo lectus.</p>
                </div>
            </GridContainer>
        </div>
    )
}

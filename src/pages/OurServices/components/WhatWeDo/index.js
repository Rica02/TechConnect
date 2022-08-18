import React, { useState } from "react";
import 'react-slideshow-image/dist/styles.css';
import { RiComputerFill, RiTeamFill } from "react-icons/ri";
import { FaHome, FaSmile } from "react-icons/fa";
import { GridContainer, IconContainer } from "./WhatWeDoStyle";

// "What do we do?" section. Present in Home and Our Services pages
export default function WhatWeDo(props) {
    const [ icons, setIcons ] = useState([
        <RiComputerFill className="icon" />,
        <FaHome className="icon" />,
        <RiTeamFill className="icon" />,
        <FaSmile className="icon" />
    ]);

    return (
        <div className="public-div-container" style={{ backgroundColor: props.bg }} >
            <h2>What do we do?</h2>
            <GridContainer>
                { props.serviceData.map((content, index) => (
                    <div className="grid-item" key={index}>
                        <IconContainer>
                            {icons[index]}
                        </IconContainer>
                        <p>{content.text}</p>
                    </div>
                ))}
            </GridContainer>
        </div>
    )
}

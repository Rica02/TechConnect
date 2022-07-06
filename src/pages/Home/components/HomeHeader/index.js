import React from "react";
import { useNavigate } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import { HomeHeader, HeaderButton } from "./HomeHeaderStyle";
import headerBanner from "../../../../assets/images/home-banner.jpg";

export default function Header() {
    let navigate = useNavigate();
    return (
        <HomeHeader headerBanner={headerBanner}>
            <div class="headerWrapper">
                <div class="headerUpperContainer" >
                    <h1>Let's connect</h1>
                    <p>We provide one-on-one tutoring on how to use your digital devices and navigate
                        the Internet. Our goal is to teach you how to connect with friends, family and
                        the rest of the Web world.</p>
                </div>
                <div class="headerLowerContainer">
                    <HeaderButton onClick={ () => navigate("/bookanappointment") }>CLICK HERE TO FIND A TUTOR</HeaderButton>
                    <p>Or call us at <a href="tel:#">000-000-0000</a></p>
                </div>
            </div>
        </HomeHeader>
    )
}

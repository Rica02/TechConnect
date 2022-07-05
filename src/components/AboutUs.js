import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import headerBanner from "../assets/images/about-us-banner.jpg";

function AboutUs() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"About us"} headerBanner={headerBanner} />
            <div>
                <button onClick={ () => navigate("/becomeatutor") }>WANT TO JOIN OUR TEAM?</button>
            </div>
        </>
    );
}

export default AboutUs;

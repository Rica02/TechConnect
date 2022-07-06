import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import headerBanner from "../assets/images/about-us-banner.jpg";

// ADDED
import AboutOurTeam from "../components/AboutOurTeam";
import OurMission from "../components/OurMission";
import { AboutOurTeamArticel, OurMissionArticel } from '../components/ArticelData'
import { OurTutors } from "./CommonSections";

function AboutUs() {
    return (
        <>
            <Header headerTitle={"About us"} headerBanner={headerBanner} />
            <div>
                {/* ADDED */}
                <AboutOurTeam {...AboutOurTeamArticel}/>
                <OurMission {...OurMissionArticel}/>

                <OurTutors />
            </div>
        </>
    );
}

export default AboutUs;

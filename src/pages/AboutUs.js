import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AboutOurTeam from "../components/AboutOurTeam";
import OurMission from "../components/OurMission";
import {AboutOurTeamArticel,OurMissionArticel} from '../components/ArticelData'
function AboutUs() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"About us"} />
            <AboutOurTeam {...AboutOurTeamArticel}/>
            <OurMission {...OurMissionArticel}/>
        </>
    );
}

export default AboutUs;

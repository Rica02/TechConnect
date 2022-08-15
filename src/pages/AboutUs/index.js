import React, { useEffect, useState } from "react";
import Header from "../Header";
import AboutOurTeam from "./components/AboutOurTeam";
import OurMission from "./components/OurMission";
import OurTutors from "./components/OurTutors";
import { AboutOurTeamArticle, OurMissionArticle } from '../ArticleData'
import headerBanner from "../../assets/images/about-us-banner.jpg";

function AboutUs(props) {
    const [tutors, setTutors] = useState([])

    useEffect( () => {
        setTutors(props.tutorData)
    })
    return (
        <>
            <Header headerTitle={"About us"} headerBanner={headerBanner} />
            <AboutOurTeam {...AboutOurTeamArticle} />
            <OurMission {...OurMissionArticle} />
            <OurTutors tutorsData = {tutors} bgColor={ ({ theme }) => theme.colorMain.backgroundLight } />
        </>
    );
}

export default AboutUs;

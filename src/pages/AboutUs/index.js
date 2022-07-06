import React from "react";
import Header from "../Header";
import AboutOurTeam from "./components/AboutOurTeam";
import OurMission from "./components/OurMission";
import OurTutors from "./components/OurTutors";
import { AboutOurTeamArticle, OurMissionArticle } from '../ArticleData'
import headerBanner from "../../assets/images/about-us-banner.jpg";

function AboutUs() {
    return (
        <>
            <Header headerTitle={"About us"} headerBanner={headerBanner} />
            <AboutOurTeam {...AboutOurTeamArticle}/>
            <OurMission {...OurMissionArticle}/>
            <OurTutors />
        </>
    );
}

export default AboutUs;

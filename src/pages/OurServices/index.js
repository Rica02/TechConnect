import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/our-services-banner.jpg";
import WhatWeDo from "./components/WhatWeDo";
import Start3Step from "./Start3Step";
import { Start3StepArticle } from '../ArticleData'

function OurServices() {
    return (
        <>
            <Header headerTitle={"Our services"} headerBanner={headerBanner} />
            <WhatWeDo color={ ({ theme }) => theme.colorMain.backgroundLight }/>
            <Start3Step {...Start3StepArticle}/>
        </>
    );
}

export default OurServices;

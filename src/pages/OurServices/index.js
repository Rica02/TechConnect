import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/our-services-banner.jpg";
import WhatWeDo from "./components/WhatWeDo";
import Start3Step from "./components/Start3Step";
import { Start3StepArticle, WhatWeDoArticle } from '../ArticleData'
import WhatCanWeTeachYou from './components/WhatCanWeTeachYou'

function OurServices() {
    return (
        <>
            <Header headerTitle={"Our services"} headerBanner={headerBanner} />
            <WhatWeDo {...WhatWeDoArticle} bgColor={ ({ theme }) => theme.colorMain.backgroundLight }/>
            <Start3Step {...Start3StepArticle}/>
            <WhatCanWeTeachYou/>
        </>
    );
}

export default OurServices;

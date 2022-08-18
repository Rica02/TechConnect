import React, { useState, useEffect } from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/our-services-banner.jpg";
import WhatWeDo from "./components/WhatWeDo";
import Start3Step from "./components/Start3Step";
import { Start3StepArticle } from '../ArticleData'
import WhatCanWeTeachYou from './components/WhatCanWeTeachYou'

function OurServices(props) {
    const [serviceData, setServiceData] = useState([])

    useEffect( () => {
        setServiceData(props.serviceData)
    })

    return (
        <>
            <Header headerTitle={"Our services"} headerBanner={headerBanner} />
            <WhatWeDo serviceData={serviceData} bgColor={ ({ theme }) => theme.colorMain.backgroundLight }/>
            <Start3Step {...Start3StepArticle}/>
            <WhatCanWeTeachYou/>
        </>
    );
}

export default OurServices;

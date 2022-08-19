import React, { useState, useEffect } from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/our-services-banner.jpg";
import WhatWeDo from "./components/WhatWeDo";
import Start3Step from "./components/Start3Step";
import WhatCanWeTeachYou from './components/WhatCanWeTeachYou'

function OurServices(props) {
    const [serviceData, setServiceData] = useState([])

    useEffect( () => {
        setServiceData(props.serviceData)
    }, [props.serviceData])

    return (
        <>
            <Header headerTitle={"Our services"} headerBanner={headerBanner} />
            <WhatWeDo serviceData={serviceData} bg='#FFFFFF' />
            <Start3Step bg='#F0EBE6' />
            <WhatCanWeTeachYou bg='#FFFFFF' />
        </>
    );
}

export default OurServices;

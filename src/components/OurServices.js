import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import headerBanner from "../assets/images/our-services-banner.jpg";
import { WhatWeDo } from "./CommonSections";

// ADDED
//import WhatDoWeDo from "../components/WhatDoWeDo";
//import { WhatDoWeDoArticel } from '../components/ArticelData'
import Start3Step from "../components/Start3Step";
import { Start3StepArticel } from '../components/ArticelData'

function OurServices() {
    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            {/* Header */}
            <Header headerTitle={"Our services"} headerBanner={headerBanner} />

            {/* Main body */}
            <div>
                {/* What do we do section */}
                <WhatWeDo color={ ({ theme }) => theme.colorMain.backgroundLight }/>

                {/* <WhatDoWeDo {...WhatDoWeDoArticel}/> */}
                <Start3Step {...Start3StepArticel}/>
            </div>
        </>
    );
}

export default OurServices;

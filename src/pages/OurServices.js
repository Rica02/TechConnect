import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import WhatDoWeDo from "../components/WhatDoWeDo";
import {WhatDoWeDoArticel} from '../components/ArticelData'
import Start3Step from "../components/Start3Step";
import {Start3StepArticel} from '../components/ArticelData'
function OurServices() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"Our services"} />
            <WhatDoWeDo {...WhatDoWeDoArticel}/>
            <Start3Step {...Start3StepArticel}/>
        </>
    );
}

export default OurServices;

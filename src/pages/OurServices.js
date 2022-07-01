import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import WhatDoWeDo from "../components/WhatDoWeDo";
import {WhatDoWeDoArticel} from '../components/ArticelData'
function OurServices() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"Our services"} />
            <WhatDoWeDo {...WhatDoWeDoArticel}/>
        </>
    );
}

export default OurServices;

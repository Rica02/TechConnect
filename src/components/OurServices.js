import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import headerBanner from "../assets/images/our-services-banner.jpg";

function OurServices() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"Our services"} headerBanner={headerBanner} />
            <div>
                <button onClick={ () => navigate("/bookanappointment") }>CLICK HERE</button>
            </div>
        </>
    );
}

export default OurServices;

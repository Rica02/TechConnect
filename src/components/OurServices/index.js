import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function OurServices() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"Our services"} />
            <div>
                <button onClick={ () => navigate("/contactus") }>CLICK HERE</button>
            </div>
        </>
    );
}

export default OurServices;

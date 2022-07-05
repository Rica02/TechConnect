import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import headerBanner from "../assets/images/become-a-tutor-banner.jpg";

function BecomeATutor() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"Become a tutor"} headerBanner={headerBanner} />
            <div>
                <button onClick={ () => navigate("/contactus") }>JOIN UR TEAM</button>
            </div>
        </>
    );
}

export default BecomeATutor;

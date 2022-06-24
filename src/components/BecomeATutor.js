import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function BecomeATutor() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <>
            <Header headerTitle={"Become a tutor"} />
            <div>
                <button onClick={ () => navigate("/contactus") }>JOIN UR TEAM</button>
            </div>
        </>
    );
}

export default BecomeATutor;

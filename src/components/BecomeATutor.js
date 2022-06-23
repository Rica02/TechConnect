import React from "react";
import { useNavigate } from "react-router-dom";

function BecomeATutor() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <div>
            <div>
                Become a tutor
            </div>
            <div>
                <button onClick={ () => navigate("/contactus") }>JOIN UR TEAM</button>
            </div>
        </div>
    );
}

export default BecomeATutor;

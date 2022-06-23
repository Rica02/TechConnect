import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <div>
            <div>
                About us
            </div>
            <div>
                <button onClick={ () => navigate("/becomeatutor") }>WANT TO JOIN OUR TEAM?</button>
            </div>
        </div>
    );
}

export default AboutUs;

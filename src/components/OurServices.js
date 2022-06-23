import React from "react";
import { useNavigate } from "react-router-dom";

function OurServices() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <div>
            <div>
                Our services
            </div>
            <div>
                <button onClick={ () => navigate("/contactus") }>CLICK HERE</button>
            </div>
        </div>
    );
}

export default OurServices;

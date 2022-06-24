import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    // Function that navigates to a different route
    let navigate = useNavigate();

    return (
        <div>
            <div>
                Homepage
            </div>
            <div>
                <button onClick={ () => navigate("/contactus") }>CLICK HERE TO FIND A TUTOR</button>
            </div>
        </div>
    );
}

export default Home;

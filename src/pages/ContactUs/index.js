import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/contact-us-banner.jpg";
import ByEmailPhone from "./components/ByEmailPhone";
import FindOurOffice from "./components/FindOurOffice";

function ContactUs() {
    return (
        <>
            <Header headerTitle={"Contact us"} headerBanner={headerBanner} />
            <div className="public-div-container">
                <ByEmailPhone />
                <FindOurOffice />
            </div>
        </>
    );
}

export default ContactUs;

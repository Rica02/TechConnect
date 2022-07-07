import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/contact-us-banner.jpg";
import ByEmailPhone from "./components/ByEmailPhone";
import FindOurOffice from "./components/FindOurOffice";
import { StyledContainer } from "../PagesStyle";

function ContactUs() {
    return (
        <>
            <Header headerTitle={"Contact us"} headerBanner={headerBanner} />
            <StyledContainer>
                <ByEmailPhone />
                <FindOurOffice />
            </StyledContainer>
        </>
    );
}

export default ContactUs;

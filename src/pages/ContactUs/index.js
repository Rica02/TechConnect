import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/contact-us-banner.jpg";
<<<<<<< HEAD
=======
import ByEmailPhone from "./components/ByEmailPhone";
import FindOurOffice from "./components/FindOurOffice";
import { StyledContainer } from "../PagesStyle";
>>>>>>> 5e8966ee7fd6b4cea50cb86bac547b4926972a24

function ContactUs() {
    return (
        <>
            <Header headerTitle={"Contact us"} headerBanner={headerBanner} />
<<<<<<< HEAD
=======
            <StyledContainer>
                <ByEmailPhone />
                <FindOurOffice />
            </StyledContainer>
>>>>>>> 5e8966ee7fd6b4cea50cb86bac547b4926972a24
        </>
    );
}

export default ContactUs;

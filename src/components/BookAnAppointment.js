import React from "react";
import Header from "./Header";
import headerBanner from "../assets/images/book-an-appointment-banner.jpg";

function BookAnAppointment() {
    return (
        <>
            <Header headerTitle={"Book an appointment"} headerBanner={headerBanner} />
        </>
    );
}

export default BookAnAppointment;

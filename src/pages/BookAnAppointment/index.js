import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/book-an-appointment-banner.jpg";
import Form from "./components/Form";

function BookAnAppointment() {
    return (
        <>
            <Header headerTitle={"Book an appointment"} headerBanner={headerBanner} />
            <Form />
        </>
    );
}

export default BookAnAppointment;

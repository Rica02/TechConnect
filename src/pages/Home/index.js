import React, { useEffect, useState } from "react";
import HomeHeader from "./components/HomeHeader";
import 'react-slideshow-image/dist/styles.css';
import WhatWeDo from "../OurServices/components/WhatWeDo";
import OurTutors from "../AboutUs/components/OurTutors";
import Testimonials from "./components/Testimonials";
import { TestimonialsArticle } from "../ArticleData";

function Home(props) {
    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        setServiceData(props.serviceData)
    })

    return (
        <>
            <HomeHeader />
            <WhatWeDo serviceData={serviceData} bg='#FFFFFF' />
            <OurTutors bg='#F0EBE6' />
            <Testimonials {...TestimonialsArticle} bg='#FFFFFF' />
        </>
    );
}

export default Home;

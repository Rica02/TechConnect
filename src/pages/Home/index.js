import React, { useEffect, useState } from "react";
import HomeHeader from "./components/HomeHeader";
import 'react-slideshow-image/dist/styles.css';
import WhatWeDo from "../OurServices/components/WhatWeDo";
import OurTutors from "../AboutUs/components/OurTutors";
import Testimonials from "./components/Testimonials";
import { OurTutorsArticle, TestimonialsArticle } from "../ArticleData";

function Home(props) {
    const [tutors, setTutors] = useState([])

    useEffect( () => {
        setTutors(props.tutorData)
    })
    //console.log(tutors);
    return (
        <>
            <HomeHeader />
            <WhatWeDo bgColor={ ({ theme }) => theme.colorMain.backgroundLight }/>
            <OurTutors tutorsData = {tutors} {...OurTutorsArticle} bgColor={ ({ theme }) => theme.colorMain.backgroundDark } />
            <Testimonials {...TestimonialsArticle} bgColor={ ({ theme }) => theme.colorMain.backgroundLight }/>
        </>
    );
}

export default Home;

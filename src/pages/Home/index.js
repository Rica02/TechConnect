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
            <WhatWeDo color={ ({ theme }) => theme.colorMain.backgroundLight }/>
            <OurTutors tutorsData = {tutors} {...OurTutorsArticle} color={ ({ theme }) => theme.colorMain.backgroundDark } />
            <Testimonials {...TestimonialsArticle} color={ ({ theme }) => theme.colorMain.backgroundLight }/>
        </>
    );
}

export default Home;

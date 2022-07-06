import React from "react";
import HomeHeader from "./components/HomeHeader";
import 'react-slideshow-image/dist/styles.css';
import WhatWeDo from "../OurServices/components/WhatWeDo";
import OurTutors from "../AboutUs/components/OurTutors";
import Testimonials from "./components/Testimonials";

function Home() {
    return (
        <>
            <HomeHeader />
            <WhatWeDo color={ ({ theme }) => theme.colorMain.backgroundLight }/>
            <OurTutors color={ ({ theme }) => theme.colorMain.backgroundDark } />
            <Testimonials olor={ ({ theme }) => theme.colorMain.backgroundLight }/>
        </>
    );
}

export default Home;

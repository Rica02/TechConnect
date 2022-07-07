import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/our-services-banner.jpg";
import WhatWeDo from "./components/WhatWeDo";
import Start3Step from "./components/Start3Step";
import { Start3StepArticle, WhatWeDoArticle } from '../ArticleData'
<<<<<<< HEAD
import WhatCanWeTeachYou from './components/WhatCanWeTeachYou'
=======
>>>>>>> 5e8966ee7fd6b4cea50cb86bac547b4926972a24

function OurServices() {
    return (
        <>
            <Header headerTitle={"Our services"} headerBanner={headerBanner} />
            <WhatWeDo {...WhatWeDoArticle} color={ ({ theme }) => theme.colorMain.backgroundLight }/>
            <Start3Step {...Start3StepArticle}/>
<<<<<<< HEAD
            <WhatCanWeTeachYou/>
=======
>>>>>>> 5e8966ee7fd6b4cea50cb86bac547b4926972a24
        </>
    );
}

export default OurServices;

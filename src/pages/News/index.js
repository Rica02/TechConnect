import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/news-banner.jpg";
import NewsItem from "./NewsItem";

function News() {
    return (
        <>
            <Header headerTitle={"News"} headerBanner={headerBanner} />
            <NewsItem />
        </>
    );
}

export default News;

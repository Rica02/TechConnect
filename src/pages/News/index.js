import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/news-banner.jpg";
import NewsItem from "./NewsItem";

function News() {
    return (
        <>
            <Header headerTitle={"News"} headerBanner={headerBanner} />
            {/* TODO: make news items dynamic */}
            <NewsItem />
        </>
    );
}

export default News;

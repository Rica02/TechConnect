import React from "react";
import Header from "../Header";
import headerBanner from "../../assets/images/news-banner.jpg";
import NewsItem from "./NewsItem";
import {useDB} from '../../ServerContext';
function News() {
    const{getNews}=useDB()
    console.log(getNews)
    return (
        <>
            <Header headerTitle={"News"} headerBanner={headerBanner} />
            {React.Children.toArray(
          getNews.map((news) => {
            return <>
             <NewsItem  news={news}/>
            </>
          })
        )}

            {/* <NewsItem /> */}
        </>
    );
}

export default News;

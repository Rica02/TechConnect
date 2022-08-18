import React from "react";
import { NewsContentContainer, NewsTitleContainer } from "./NewsItemStyle";
import ImgPlaceholder from "../../../assets/images/our-services-1.jpg";
import moment from "moment";
export default function NewsItem({news}) {
    return (
        // TODO: make these dynamic
        <div className="public-div-container">
            <NewsTitleContainer>
                <h2>{news.title}</h2>
                <p>Date posted : {moment(news.date).format("MMM Do YY")}</p>
            </NewsTitleContainer>
            <NewsContentContainer>
                <p>{news.text}</p>
                <img src={ImgPlaceholder} alt="news banner" />
            </NewsContentContainer>
        </div>
    )
}

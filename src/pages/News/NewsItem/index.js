import React from "react";
import { StyledContainer } from "../../PagesStyle";
import { NewsContentContainer, NewsTitleContainer } from "./NewsItemStyle";
import ImgPlaceholder from "../../../assets/images/our-services-1.jpg";

export default function NewsItem() {
    return (
        // TODO: make these dynamic
        <StyledContainer>
            <NewsTitleContainer>
                <h2>Post title</h2>
                <p>Date posted: dd/mm/yyyy</p>
            </NewsTitleContainer>
            <NewsContentContainer>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla mattis
                    metus in tincidunt. Phasellus vel tempor quam. Nam sed condimentum odio, ut
                    aliquet neque. Fusce lectus justo, condimentum et auctor eu, suscipit vitae ipsum.
                    Vestibulum imperdiet ornare ipsum condimentum maximus. Maecenas sodales
                    varius scelerisque. Sed nec eros sagittis, lobortis velit nec, lobortis risus. Nam
                    gravida lectus sit amet massa pellentesque rhoncus.</p>
                <img src={ImgPlaceholder} />
            </NewsContentContainer>
        </StyledContainer>
    )
}

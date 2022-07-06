import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import { StyledSlideshowContainer } from "../../../PagesStyle";
import testimonialImg1 from "../../../../assets/images/home-testimonial-1.jpg";
import testimonialImg2 from "../../../../assets/images/home-testimonial-2.jpg";

export default function Testimonials(props) {
    // Array of image + caption to be used in Testimonial section
    const testimonalsSlides = [
        {
            url: testimonialImg1,
            caption: '"Great experience! My tutor was so kind and patient, it didn\'t take long for me to learn."'
            },
            {
            url: testimonialImg2,
            caption: '"I thought I could never keep up with all this technology, but thanks to my tutor John, I can now easily video call with my grandchildren abroad."'
            }
    ];

    return (
        <StyledSlideshowContainer color={ props.color }>
            <h2>Testimonials</h2>
            <Slide>
                {testimonalsSlides.map((testimonalsSlide, index)=> (
                    <div className="each-slide" key={index}>
                        <span>{testimonalsSlide.caption}</span>
                        <img src={testimonalsSlide.url} />
                    </div>
                ))}
            </Slide>
        </StyledSlideshowContainer>
    )
}

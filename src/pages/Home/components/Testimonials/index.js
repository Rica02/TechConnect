import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import { StyledSlideshowContainer } from "./TestimonialsStyle";

export default function Testimonials(props) {
    return (
        <StyledSlideshowContainer style={{ backgroundColor: props.bg }} >
            <h2>Testimonials</h2>
            <Slide>
                {props.TestimonialList.map((testimonal, index)=> (
                    <div className="each-slide" key={index}>
                        <span>{testimonal.caption}</span>
                        <img src={testimonal.url} alt="testimonial" />
                    </div>
                ))}
            </Slide>
        </StyledSlideshowContainer>
    )
}

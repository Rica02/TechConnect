import styled from "styled-components";

// Testimonials slideshow container
export const StyledSlideshowContainer = styled.div`
    background-color: ${ (props) => props.color };  // Either white or light beige
    padding: 35px 100px;
    color: ${ ({ theme }) => theme.colorMain.text };

    h2 {
        color: ${ ({ theme }) => theme.colorMain.highlightMain };
        text-align: center;
    }
    span {
        font-size: large;
        padding: 50px;
    }
    .each-slide {
        display: flex;
        padding: 100px;
        align-items: center;
        text-align: center;
    }
    img {
        height: 200px;
        width: auto;
    }
`

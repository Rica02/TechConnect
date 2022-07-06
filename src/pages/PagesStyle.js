import styled from "styled-components";

// GLOBAL STYLES. Used in multiple pages

export const StyledContainer = styled.div`
    background-color: ${ (props) => props.color };  // Either white or light beige
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 100px;
    color: ${ ({ theme }) => theme.colorMain.text };
    border-bottom: solid ${ ({ theme }) => theme.colorMain.highlightMain } 2.5px;

    h2 {
        color: ${ ({ theme }) => theme.colorMain.highlightMain };
    }
    p {
        font-size: large;
    }
    .icon-container {
        color: white;
        background-color: ${ ({ theme }) => theme.colorMain.highlightRed };
        padding: 10px;
        border-radius: 50%;
        margin-right: 30px;
    }
    .icon {
        width: 50px;
        height: auto;
    }
    .grid-container-what-we-do{
        display: grid;
        grid-template-columns: auto auto;
        padding: 10px;
    }
    .grid-item {
        display: flex;
        align-items: center;
        padding: 20px;
        font-size: 30px;
        img {
            height: 80px;
            margin: 20px;
            border: solid black 1px
        }
    }
    .grid-container-tutors{
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 10px;
    }
`
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

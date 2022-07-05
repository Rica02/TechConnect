import styled from "styled-components";

export const HomeHeader = styled.header`
    display: flex;
    width: 100%;
    min-height: 80vh;
    background-image: url("/images/home-banner.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-color: brown;
    align-items: center;
    color: white;
    border-bottom: solid ${ ({ theme }) => theme.colorMain.highlightMain } 2.5px;

    p {
        font-size: large;
    }

    a {
        color: white;
        font-weight: bold;
    }

    .headerWrapper {
        width: 700px;
        height: auto;
        padding: 80px;

        // Make width dynamic when screen gets smaller
        @media (max-width: 800px) {
            width: 100%;
        }
    }

    .headerLowerContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const StyledButton = styled.button`
    background-color: ${ ({ theme }) => theme.colorMain.highlightRed };
    color: white;
    padding: 5px 30px;
    border-style: none;
    border-radius: 5px;
    font-size: large;
`

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

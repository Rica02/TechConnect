import styled from "styled-components";

export const HomeHeader = styled.header`
    display: flex;
    width: 100%;
    min-height: 80vh;
    background-image: url(${ ({ headerBanner }) => headerBanner });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-color: brown;
    align-items: center;
    color: white;

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

export const HeaderButton = styled.button`
    background-color: ${ ({ theme }) => theme.colorMain.highlightRed };
    color: white;
    padding: 5px 30px;
    border-style: none;
    border-radius: 5px;
    font-size: large;
`

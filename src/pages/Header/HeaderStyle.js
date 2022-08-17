import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    height: 200px;
    background-image: url(${ ({ headerBanner }) => headerBanner });
    background-color: brown;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-color: brown;
    align-items: center;
    color: white;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    font-size: 3em;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    border-bottom: solid ${ ({ theme }) => theme.colorMain.highlightMain } 2px;
`

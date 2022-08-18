import styled from "styled-components";

export const CardWrap = styled.div`
    margin: 15px;
    height: 250px;
    width: 300px;
    position: relative;
`;

export const CardImg = styled.img`
    height: 250px;
    width: 300px;
    z-index:-1;
`;

export const CardFontWrap = styled.div`
     position: absolute;
     width: 100%;
     bottom: 0px;
`;

export const CardFont = styled.p`
    background-color: rgba(0,0,0,50%);
    color: white;
    justify-content: center;
    text-align: center;
    min-width: 250px;
    padding: 5px;
`;

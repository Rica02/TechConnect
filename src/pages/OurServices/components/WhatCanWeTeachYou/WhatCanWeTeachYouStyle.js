import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container=styled.div`
    display: grid;
    justify-content: center;
`;

export const TextH1=styled.h1`
    text-align: center;
    color: ${ ({ theme }) => theme.colorMain.highlightRed};
`;

export const CardContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
    
`;
export const CardWrap=styled.div`
    margin: 10px;
    height: 220px;
    width: 250px;
   
`;

export const CardImg=styled.img`
    height: 200px;
    width: 250px;
    z-index:-1;
`;
export const CardFontWrap=styled.div`

`;
export const CardFont=styled.div`
    background-color: blue;
    color: gray;
    font-size: 10px;
    display: inline;
    bottom: 0;
    z-index:1;
    justify-content: center;
`;
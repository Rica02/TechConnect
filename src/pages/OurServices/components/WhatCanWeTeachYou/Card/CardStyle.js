import styled from "styled-components";

export const CardWrap=styled.div`
    margin: 15px;
    height: 220px;
    width: 250px;
    position: relative;
    
`;

export const CardImg=styled.img`
    height: 200px;
    width: 250px;
    z-index:-1;
`;
export const CardFontWrap=styled.div`
     
     position: absolute;
     bottom: 4px;
`;
export const CardFont=styled.p`
    background-color: rgba(105,105,105,70%);
    color: white;
    font-size: 15px;
    justify-content: center;
    text-align: center;
    min-width: 250px;
`;
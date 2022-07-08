import styled from "styled-components";

export const CardWrap=styled.div`
    margin: 15px;
    height: 250px;
    width: 300px;
    position: relative;
    
`;

export const CardImg=styled.img`
    height: 250px;
    width: 300px;
    z-index:-1;
`;
export const CardFontWrap=styled.div`
     
     position: absolute;
     bottom: 4px;
`;
export const CardFont=styled.p`
    background-color: rgba(105,105,105,70%);
    color: white;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    min-width: 250px;
`;
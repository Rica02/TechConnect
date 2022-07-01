import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/ThemeColors";

export const Container=styled.div`
    display: grid;
    justify-content: center; 
    align-items: center; 
`;
export const Container2=styled.div`
    display: grid;
    justify-content: center; 
    align-items: center; 
    border-top: 5px solid ${ ({ theme }) => theme.colorMain.highlightRed};
    border-bottom: 5px solid ${ ({ theme }) => theme.colorMain.highlightRed};
    
`;
export const JoinButton=styled.button`
    
    background: #ff8000;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: black;
    font-size: 20px;
    cursor: pointer;
`;
export const TextH1=styled.h1``;
export const TextH2=styled.h2``;
export const ContentText=styled.p``;
export const ImgWrap =styled.div`
    max-width: 555px;
    height: 100%;
`;
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
export const ImgText=styled.p`

`;

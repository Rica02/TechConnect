import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../ThemeColors";

export const Container=styled.div`
    display: grid;
    align-items: center;
`;
export const ContainerWrap=styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const TitleH1=styled.h2`
    color:${ ({ theme }) => theme.colorMain.highlightRed} ;
    justify-content: center; 
    align-items: center; 
`;
export const ItemWrap=styled.div`
    display: flex;
    
    align-items: center;
    flex-direction: row;
    gap: 50px;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
export const ImgText = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
`;
export const TextWrap = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    
`;
export const IconWrap = styled.div`
    background-color: red;
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid red;
    border-radius:50%;
   
`;
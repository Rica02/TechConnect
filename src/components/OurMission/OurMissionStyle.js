import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../components/ThemeColors";

export const Container=styled.div`
    display: grid;
    align-items: center;
    background-color: ${ ({ theme }) => theme.colorMain.backgroundDark};
`;

export const ContainerWrap=styled.div`
    display: grid;
    justify-content: center; 
    align-items: center; 
    border-top: 5px solid ${ ({ theme }) => theme.colorMain.highlightRed};
    border-bottom: 5px solid ${ ({ theme }) => theme.colorMain.highlightRed};
    
`;

export const TextH1=styled.h1`
    text-align: center;
    max-width: 440px;
    margin-bottom: 35px;
`;

export const ContentText=styled.p`
    display: flex;
    justify-content: center; 
    align-items: center;
    max-width: 440px;
    margin-bottom: 35px;
`;
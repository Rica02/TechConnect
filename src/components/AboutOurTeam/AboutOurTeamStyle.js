import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../components/ThemeColors";

export const Container=styled.div`
    display: grid;
    align-items: center;
`;
export const ContainerWrap=styled.div`
    display: grid;
    justify-content: center; 
    align-items: center; 
`;

export const TextH2=styled.h2`
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
export const ImgWrap =styled.div`
    display: grid;
    justify-content: center; 
    align-items: center; 
    max-width: 555px;
    height: 100%;
`;
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
export const ImgText=styled.p`
    max-width: 440px;
    margin-bottom: 35px;
`;

import styled from "styled-components";

export const Container=styled.div`
    display: grid;
    align-items: center;
    border-bottom: 2.5px solid ${ ({ theme }) => theme.colorMain.highlightMain};
`;
export const ContainerWrap=styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
    justify-items: center;
`;

export const TextH2=styled.h2`
    font-size: 55px;
    text-align: center;
    max-width: 440px;
    margin: 35px 0;
    color: ${ ({ theme }) => theme.colorMain.highlightMain};
`;
export const ContentText=styled.p`
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
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
    font-size: 25px;
    margin-bottom: 35px;
    text-align: center;
`;

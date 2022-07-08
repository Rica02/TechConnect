import styled from "styled-components";

export const Container=styled.div`
    display: grid;
    align-items: center;
    background-color: ${ ({ theme }) => theme.colorMain.backgroundDark};
    border-bottom: 2.5px solid ${ ({ theme }) => theme.colorMain.highlightMain};
`;

export const ContainerWrap=styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
`;

export const TextH2=styled.h2`
    font-size: 55px;
    text-align: center;
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

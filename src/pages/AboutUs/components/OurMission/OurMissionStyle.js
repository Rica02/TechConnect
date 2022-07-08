import styled from "styled-components";

export const Container=styled.div`
    display: grid;
    align-items: center;
    background-color: ${ ({ theme }) => theme.colorMain.backgroundDark};
`;

export const ContainerWrap=styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    border-bottom: 2.5px solid ${ ({ theme }) => theme.colorMain.highlightMain};

`;

export const TextH2=styled.h2`
    text-align: center;
    max-width: 440px;
    margin-bottom: 35px;
    color: ${ ({ theme }) => theme.colorMain.highlightMain};
`;

export const ContentText=styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 440px;
    margin-bottom: 35px;
`;

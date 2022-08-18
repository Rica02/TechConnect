import styled from "styled-components";

export const Quote = styled.h3`
    color: ${ ({ theme }) => theme.colorMain.text };
    text-align: center;
    font-weight: normal;
    font-style: italic;
    padding: 50px;
`

export const ImgWrap =styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    max-width: 555px;
    height: 100%;
    text-align: center;
    margin: 30px 0;

    img {
        width: 100%;
        margin: 0 0 10px 0;
        padding-right: 0;
    }
`;

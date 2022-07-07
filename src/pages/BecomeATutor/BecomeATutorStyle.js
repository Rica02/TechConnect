import styled from "styled-components";

export const UpperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`

export const LowerContainer = styled.div`
    display: flex;
    align-items: center;

    h3 {
        color: ${ ({ theme }) => theme.colorMain.highlightMain };
        margin-bottom: 30px;
    }
    img {
        height: 225px;
        margin: 20px 0 20px 20px;
    }
`

import styled from "styled-components";

export const Button = styled.button`
    font-weight: bold;
    color: ${({theme}) => theme.colorMain.highlightRed};

    &:hover {
        text-decoration: underline;
    }
`

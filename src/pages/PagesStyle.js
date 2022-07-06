import styled from "styled-components";

export const StyledContainer = styled.div`
    background-color: ${ (props) => props.color };  // Either white or light beige
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 100px;
    color: ${ ({ theme }) => theme.colorMain.text };
    border-bottom: solid ${ ({ theme }) => theme.colorMain.highlightMain } 2.5px;

    h2 {
        color: ${ ({ theme }) => theme.colorMain.highlightMain };
    }
    p {
        font-size: large;
    }
`

export const StyledButton = styled.button`
    background-color: ${ ({ theme }) => theme.colorMain.highlightRed };
    border-radius: 10px;
    padding: 5px 20px;
    color: white;
    border: none;
`

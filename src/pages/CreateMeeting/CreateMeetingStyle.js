import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        margin: 10px 0 5px 0;
        font-size: large;
    }

    select, input {
        padding: 5px;
        margin-bottom: 5px;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

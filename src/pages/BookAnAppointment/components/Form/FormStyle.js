import styled from "styled-components";

export const FormContainer = styled.form`
    margin: 25px 50px;
    width: 800px;
    font-size: large;

    label {
        margin: 10px 0;
    }
    input, textarea {
        font-size: large;
        border-radius: 10px;
    }

    @media (max-width: 800px) {
        width: 90%;
    }
`

export const FormNameContainer = styled.div`
    display: flex;
`

export const FormItemContainer = styled.div`
    width: 100%;
    padding: 0 10px;
`

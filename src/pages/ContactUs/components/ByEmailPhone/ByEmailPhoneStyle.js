import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    text-align: center;

    div{
        margin: 0 100px;
    }
    h2 {
        text-align: center;
    }

    button {
        background: none;
        border: none;
        text-decoration: underline;
        color: #0d6efd;

        &:hover {
            color: #3366BB;
        }
    }
`

import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
`
export const GridItem = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 30px;

    img {
        height: 80px;
        margin: 20px;
        border: solid black 1px
    }
`

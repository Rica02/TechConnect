import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding: 10px;

    .grid-item {
        display: flex;
        align-items: center;
        padding: 20px;
        font-size: 30px;

        img {
            height: 80px;
            margin: 20px;
            border: solid black 1px
        }
    }
`

export const IconContainer = styled.div`
    color: white;
    background-color: ${ ({ theme }) => theme.colorMain.highlightRed };
    padding: 10px;
    border-radius: 50%;
    margin-right: 30px;

    .icon {
        width: 50px;
        height: auto;
    }
`

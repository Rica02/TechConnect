import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    background-color: #F0F0F0;

    th {
        background-color: #D9D9D9;
    }

    td, th {
        border: ${({theme}) => theme.colorMain.text} 0.5px solid;
        padding: 15px;
    }

    tr:nth-child(odd) {
        background-color: #F0F0F0;
    }

    img {
        width: 60px;
        border: ${({theme}) => theme.colorMain.text} 1px solid;
        margin-right: 15px;
    }

    a {
        font-weight: bold;
        color: ${({theme}) => theme.colorMain.highlightRed};
    }
`

import styled from "styled-components";

export const WebButton=styled.button`

    background:${ ({ theme }) => theme.colorMain.highlightRed};
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: black;
    font-size: 20px;
    cursor: 'pointer'
`;
export const ClickHear=styled.button`

    background:${ ({ theme }) => theme.colorMain.highlightRed};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    cursor: 'pointer'
`;

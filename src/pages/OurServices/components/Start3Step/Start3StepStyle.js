import styled from "styled-components";

export const CellWrap = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;

    p {
        font-size: larger;
    }
`;

export const StepTitle = styled.h4`
    margin-right: 20px;
    color: ${ ({ theme }) => theme.colorMain.highlightMain};
`;

export const StepNumberWrap = styled.div`
    background-color: ${props => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius:50%;
    padding-top: 10px;

    h4 {
        color: white;
        font-size: 35px;
    }
`;

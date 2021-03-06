import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container=styled.div`
    display: grid;
    justify-content: center;
    background-color: ${ ({ theme }) => theme.colorMain.backgroundDark};
    border-bottom: 2.5px solid ${ ({ theme }) => theme.colorMain.highlightMain};
`;

export const ContainerWrap=styled.div`
    display: grid;
    justify-content: center;
    padding: 30px;
`;
export const ContainerStep=styled.div`
    display: flex;
    @media screen and (max-width: 1300px){
        flex-direction: column;
    }
`;
export const TextH2=styled.h2`
    font-size: 55px;
    margin: 35px 0;
    text-align: center;
    color: ${ ({ theme }) => theme.colorMain.highlightMain};
`;

export const ContentText=styled.p`
    font-size: 25px;
    margin-left: 20px;

`;
export const TextWrap=styled.div`
    display: flex;
`;
export const TextRow=styled.div`
    display: grid;
`;
export const StepWrap = styled.div`
    display: flex;
    padding: 20px;

`;
export const StepTitle = styled.h4`
    margin-right: 20px;
`;
export const StepNumberWrap1 = styled.div`
    background-color: ${ ({ theme }) => theme.colorMain.highlightYellow};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius:50%;
    padding-top: 10px;

`;
export const StepNumberWrap2 = styled.div`
    background-color: ${ ({ theme }) => theme.colorMain.highlightOrange};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius:50%;
    padding-top: 10px;
`;
export const StepNumberWrap3 = styled.div`
    background-color: ${ ({ theme }) => theme.colorMain.highlightRed};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius:50%;
    padding-top: 10px;
`;
export const Number=styled.h4`
    color: white;
    font-size: 35px;

`;
export const PhoneNumber=styled(Link)`
    font-size: 25px;
    cursor: 'pointer';
`;
export const ClickHear=styled.button`
    background:${ ({ theme }) => theme.colorMain.highlightRed};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 25px;
    cursor: 'pointer';
`;
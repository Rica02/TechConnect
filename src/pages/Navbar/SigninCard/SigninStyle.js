import styled from "styled-components";

export const Container = styled.div`
    height: 90%;
    position: fixed;
    bottom: 0;
    right: 0;
    top: 10%;
`;

export const Form = styled.form`
    background-color:${ ({ theme }) => theme.colorMain.backgroundSignIn };
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 100px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.7);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    color: ${ ({ theme }) => theme.colorMain.text };
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 16px;
    color: ${ ({ theme }) => theme.colorMain.text };
`;

export const FormInput = styled.input`
    padding: 10px 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 10px;
`;

export const FormButton = styled.button`
    background: ${ ({ theme }) => theme.colorMain.highlightOrange };
    margin: 5px;
    padding: 10px 0;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    cursor: pointer;
`;

export const Table = styled.table`
    display: flex;
`

export const TableCell = styled.td`
    display: flex;
    margin: 0 15px;
    flex-direction: column;
`

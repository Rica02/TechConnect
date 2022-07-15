import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    overflow: hidden;
    background-color:${ ({ theme }) => theme.colorMain.backgroundLight };
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px){
        height: 80%;
    }
`;
export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 32px;
    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;

    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width:600px){
        padding: 10px;

    }
`;

export const Form= styled.form`
    background: #fce6c9;
    max-width: 600px;
    height: auto;
    width: 100%;

    display: grid;
    margin: 5px auto;
    padding: 90px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const FormH1=styled.h1`
 
    color: black;
    font-size: 20px;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: black;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    border: none;
    border-radius: 4px;
`;
export const FormInputText = styled.textarea `
   
    margin-bottom: 10px;
    height: 200px;
    border: none;
    border-radius: 4px;
`;
export const FormButton = styled.button`
    background: #ff8000;
    max-width: 5rem;
    margin: 5px;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: black;
    font-size: 20px;
    cursor: pointer;
`;

export const Text=styled.span`
    text-align: center;
    margin-top: 24px;
    color: black;
    font-size: 14px;
`;
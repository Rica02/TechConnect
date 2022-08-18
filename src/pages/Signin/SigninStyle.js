import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 692px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-color: ${ ({ theme }) => theme.colorMain.backgroundSignIn };
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

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const Form = styled.form`
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 90px 30px;

    @media screen and (max-width: 400px){
        padding: 32px;
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

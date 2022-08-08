import styled from "styled-components";



export const Container = styled.div`
    height: 90%;
    position: fixed;
    bottom: 0;
    right: 0;
    top: 10%;
    
`;


export const Form= styled.form`
    background-color:${ ({ theme }) => theme.colorMain.backgroundSignIn };
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 60px 100px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const FormH1=styled.h1`
    margin-bottom:  40px;
    color: black;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: black;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 10px;
`;

export const FormButton = styled.button`
    background: #ff8000;
    margin: 5px;
    padding: 10px 0;
    border: none;
    border-radius: 10px;
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


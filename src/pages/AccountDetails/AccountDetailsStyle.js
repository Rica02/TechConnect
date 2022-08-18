import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: grid;
`;

export const RWrap = styled.div`
   display: flex;
   flex: 20%;
   margin-left: 2rem;
   margin-right: 2rem;
   justify-content: center;
`;
export const LWrap = styled.div`
flex: 20%;
    margin-left: 2rem;
   margin-right: 2rem;
   display: flex;
   justify-content:center;
`;
export const LinkWrap = styled.div`
flex: 20%;
    margin-left: 2rem;
   margin-right: 2rem;
   display: flex;
   justify-content:flex-end;
`;
export const Title = styled.h3`
    color:${({ theme }) => theme.colorMain.text};
`;
export const TitleWrap = styled.div`
    display: flex;
`;
export const EditButton = styled.button`
align-content: center;
 background-color:${({ theme }) => theme.colorMain.highlightMain};
 margin-right: 1rem;
 padding: 0.5rem;
 font-size: large;
 border: none;
 border-radius: 5px;
 color: white;
`;
export const DeleteButton = styled.button`
 background-color:${({ theme }) => theme.colorMain.highlightRed};
 padding: 0.5rem;
 font-size: large;
 border: none;
 border-radius: 5px;
 color: white;
`;
export const WrapContainer = styled.div`
     display: flex;
     margin: 1rem;
     @media (max-width: 810px) {
        display: grid;
    }
`;
export const LableContainer = styled.div`
    display: grid;
    flex: 60%;
    grid-template-columns: auto auto;
     background-color:gainsboro;
     border: 1px solid black;
     border-color: black;
     border-radius: 5px;
     margin: 1rem;

     @media (max-width: 550px) {
        display: grid;
    }
`;
export const LableContainer2 = styled.div`
    display: grid;
    flex: 60%;
    grid-template-columns: auto ;
     background-color:gainsboro;
     border: 1px solid black;
     border-color: black;
     border-radius: 5px;
     margin: 1rem;

     @media (max-width: 550px) {
        display: grid;
    }
`;
export const Lable = styled.h5`

`;
export const Data = styled.p`
    font-size: 1.1rem;
`;
export const Column = styled.div`
    display: flex;
    margin: 0.5rem;
`;
export const Divider = styled.div`
    background-color:${({ theme }) => theme.colorMain.backgroundSignIn};
`;
export const ViewLink = styled(Link)`
color:${({ theme }) => theme.colorMain.highlightRed};
font-weight:bold;
align-items: end;
`;

export const Input=styled.input`
`;
export const EditCardWrap=styled.div`
display: grid;
max-width: 400px;
 height: 10rem;
 margin: 0.2rem;
 padding: 0.5rem;
`;

export const Select=styled.select`
`;

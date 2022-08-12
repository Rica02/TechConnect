import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    display: flex;
    @media (max-width: 850px) {
        display: grid;
    }
`;
export const RightContainer = styled.div`
flex: 90%;
`;
export const LeftContainer = styled.div`

     display: grid;;
  
`;
export const Wrap=styled.div`
display: grid;
    grid-template-columns: 2fr 1fr;
     background-color:gainsboro;
     border: 1px solid black;
     border-color: black;
     border-radius: 5px;
     margin: 1rem;

     @media (max-width: 850px) {
        grid-template-columns: auto ;
    }
`;
export const Box=styled.div`
max-width: 250px;
    display: flex;
    padding: 1rem;
    align-items:center;

`;
export const PhoneLink=styled(Link)`
`;
export const Input=styled.input`
border-radius: 5px;

`;
export const GridWrap=styled.div`
    display: grid;
    margin: 0.3rem;
`;
export const FlexWrap=styled.div`
    display: flex;
`; 
export const H5=styled.h5`
`;
export const Lable=styled.label``;

export const Textarea=styled.textarea`
min-height: 10rem;
max-width: 30rem;
`;

export const Button=styled.button`
height: 3rem;
width: 10rem;
 padding: 0.5rem;
 font-size: large;
 border: none;
 border-radius: 5px;
 color: white;
background-color:${({ theme }) => theme.colorMain.highlightRed};
`;
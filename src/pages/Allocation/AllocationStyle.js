import styled from "styled-components";


export const Container = styled.div`
    background-color:${ ({ theme }) => theme.colorMain.backgroundLight };
    display: grid;
`;
export const ContainerWrap = styled.div`
background-color:${ ({ theme }) => theme.colorMain.backgroundLight };

`;
export const Wrap=styled.div`
display: grid;
    background-color:gainsboro;
     border: 1px solid black;
     border-color: black;
     border-radius: 5px;
     margin: 1rem;
     grid-template-columns: auto auto auto auto;
`;
export const Title = styled.h3`
    color:${({ theme }) => theme.colorMain.text};
`;
export const SubTitle = styled.h5`
    color:${({ theme }) => theme.colorMain.text};
`;
export const Data = styled.p`
    font-size: 1.1rem;
`;
export const Column = styled.div`
    display: flex;
    margin: 0.5rem;
`;
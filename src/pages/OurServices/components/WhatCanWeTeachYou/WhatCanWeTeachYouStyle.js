import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`;

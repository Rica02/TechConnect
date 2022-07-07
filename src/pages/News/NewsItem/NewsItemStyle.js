import styled from "styled-components";

export const NewsTitleContainer = styled.div`
    display: flex;
    align-self: flex-start;
    align-items: baseline;
    margin: 30px 0;

    p {
        margin: 0 20px;
    }
`

export const NewsContentContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 400px;
        height: 200px;
        object-fit: cover;
        margin-left: 30px;
    }
`

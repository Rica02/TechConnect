import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterContatiner = styled.footer`
    background:${ ({ theme }) => theme.colorMain.backgroundDark};
`;

export const FooterWrap = styled.div`
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper =styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: ${ ({ theme }) => theme.colorMain.backgroundMain};

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;


export const FooterLink = styled(Link)`
    color: ${ ({ theme }) => theme.colorMain.highlightMain};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: ${ ({ theme }) => theme.colorMain.text};
        transition: 0.3s ease-in-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: ${ ({ theme }) => theme.colorMain.highlightMain};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
        color: ${ ({ theme }) => theme.colorMain.highlightRed};
    }
`;

export const WebsiteRights = styled.small`
    color: ${ ({ theme }) => theme.colorMain.text};
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: ${ ({ theme }) => theme.colorMain.text};
    font-size: 24px;
`;

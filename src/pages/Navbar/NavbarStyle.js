import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};     // if extended menu is open, fill the screen, otherwise 80px
    background-color: ${ ({ theme }) => theme.colorMain.backgroundDark };
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 10%;
    display: flex;
    align-items: left;
    padding: 5px;
`;

export const RightContainer = styled.div`
    flex: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    color: ${ ({ theme }) => theme.colorMain.highlightMain };
`;

export const NavbarLink = styled(Link)`
    color: ${ ({ theme }) => theme.colorMain.highlightMain };
    font-size: large;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;

    // only show links when screen is bigger than 800px
    @media (max-width: 800px) {
        display: none;
    }
`;

export const NavbarLinkExtended = styled(Link)`
    color: ${ ({ theme }) => theme.colorMain.highlightMain };
    font-size: large;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`;

export const Logo = styled.img`
    padding: 10px;
    max-width: auto;
    height: 100%;
`;


// menu that will display in small screens like mobile phones
export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    // only show button when screen is smaller than 800px
    @media (min-width: 800px) {
        display: none;
    }
`;

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    // only show extended menu when screen is smaller than 800px
    @media (min-width: 800px) {
        display: none;
    }
`;
export const NavbarSignContainer = styled.div`
    background-color: ${ ({ theme }) => theme.colorMain.backgroundSignIn };;
    color: ${ ({ theme }) => theme.colorMain.highlightMain };
    border-left: 2.5px solid ${ ({ theme }) => theme.colorMain.highlightMain};
    display:grid;
    align-items: center;
    z-index: 1;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const NavbarSignContainerExtended = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
        display: none;
    }
`;
export const Signwrap=styled.div`
    display: grid;
    min-width: 150px;
`;
export const SignButtonWrap = styled.div`
    display: flex;
`;
export const LoginChange = styled.div`
     display:  ${({showlogin}) => (showlogin ?'flex':'none')};
`;
export const NavbarP= styled.p`
    background-color: ${ ({ theme }) => theme.colorMain.backgroundSignIn };;
    border: none;
    font-size: large;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
`;
export const NavbarButton= styled.button`
    background-color: ${ ({ theme }) => theme.colorMain.backgroundSignIn };;
    display: flex;
    border: none;
    font-size: large;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;

`;
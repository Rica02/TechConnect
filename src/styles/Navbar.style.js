import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: beige;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex: 10%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    background-color: red;
`;

export const RightContainer = styled.div`
    flex: 90%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
    background-color: green;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;

`;

export const NavbarLinkContainer = styled.div`
    display: flex;

`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const Logo = styled.img`
    padding: 10px;
    max-width: auto;
    height: 100%;
`;


// Menu that will display in small screens like mobile phones
export const NavbarExtendedContainer = styled.div`
`;

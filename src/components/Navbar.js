// This is the navbar, present in all pages
import React from "react";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo
} from "../styles/Navbar.style";
import LogoImg from "../assets/logo.png";

export function Navbar() {
    return <NavbarContainer>
        <NavbarInnerContainer>
            <LeftContainer>
                <Logo src={LogoImg}></Logo>
            </LeftContainer>
            <RightContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">HOME</NavbarLink>
                    <NavbarLink to="/aboutus">ABOUT US</NavbarLink>
                    <NavbarLink to="/ourservices">OUR SERVICES</NavbarLink>
                    <NavbarLink to="/news">NEWS</NavbarLink>
                    <NavbarLink to="/becomeatutor">BECOME A TUTOR</NavbarLink>
                    <NavbarLink to="/contactus">CONTACT US</NavbarLink>
                </NavbarLinkContainer>
            </RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer>
        </NavbarExtendedContainer>
    </NavbarContainer>
  }

  export default Navbar;

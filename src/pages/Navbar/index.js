import React, { useState } from "react";
import { RiAccountBoxFill } from 'react-icons/ri'
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    NavbarSignContainer,
    NavbarSignContainerExtended,
    Signwrap,
    SignButtonWrap,
} from "./NavbarStyle";
import LogoImg from "../../assets/logo.png";
import SigninCard from "./SigninCard"


  //Sign Button
  const SignButton = ()=>(
    <>
        <SignButtonWrap>
        <RiAccountBoxFill fontSize="3em" />
        <NavbarLink to="/">SIGN IN</NavbarLink>
        </SignButtonWrap>
    </>
    );
    
export function Navbar() {
    // used to manage the "extend button"
    const [ extendNavbar, setExtendNavbar ] = useState(false);
    const [toggleSignin,setToggleSignin] = useState(false);

  

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
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
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((value) => !value);     // set the value opposite of current value
                            }}
                        >
                            {
                                // display hamburger menu when state is false, X when true
                                extendNavbar ? <>&#10005;</> : <>&#8801;</>
                            }
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
                <NavbarSignContainer >
                    <Signwrap onClick={() => {setToggleSignin((value) => !value); // set the value opposite of current value
                    }}>
                        <SignButton/>
                    </Signwrap>
                    {toggleSignin && ( <SigninCard/>)}   
                </NavbarSignContainer>
            </NavbarInnerContainer>
            { extendNavbar && (
                // display extended menu when state is true
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/">HOME</NavbarLinkExtended>
                    <NavbarLinkExtended to="/aboutus">ABOUT US</NavbarLinkExtended>
                    <NavbarLinkExtended to="/ourservices">OUR SERVICES</NavbarLinkExtended>
                    <NavbarLinkExtended to="/news">NEWS</NavbarLinkExtended>
                    <NavbarLinkExtended to="/becomeatutor">BECOME A TUTOR</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contactus">CONTACT US</NavbarLinkExtended>
                    <NavbarSignContainerExtended >
                            <RiAccountBoxFill />
                            <NavbarLinkExtended to="/signin">Sing in</NavbarLinkExtended>
                        </NavbarSignContainerExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
  }

  export default Navbar;

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
    LoginChange,
    NavbarButton
} from "./NavbarStyle";
import LogoImg from "../../assets/logo.png";
import SigninCard from "./SigninCard"
import { useDB } from "../../ServerContext"
import { useNavigate } from "react-router-dom"
//Sign Button
const SignButton = () => (
    <>
        <SignButtonWrap>
            <RiAccountBoxFill fontSize="3em" />
            <NavbarLink to="/">SIGN IN</NavbarLink>
        </SignButtonWrap>
    </>
);


export function Navbar(showlogin) {
    var navigate = useNavigate()
    // used to manage the "extend button"
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [toggleSignin, setToggleSignin] = useState(false);


    const { admin, currentUser, logout } = useDB()
    console.log("navbar", admin)
    function LogoutToHome(e) {
        e.preventDefault()
        navigate("/")
        logout()
    }

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={LogoImg}></Logo>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        {admin === null && (<>
                            <NavbarLink to="/">HOME</NavbarLink>
                            <NavbarLink to="/aboutus">ABOUT US</NavbarLink>
                            <NavbarLink to="/ourservices">OUR SERVICES</NavbarLink>
                            <NavbarLink to="/news">NEWS</NavbarLink>
                            <NavbarLink to="/becomeatutor">BECOME A TUTOR</NavbarLink>
                            <NavbarLink to="/contactus">CONTACT US</NavbarLink>

                        </>)}

                        {admin === '1' && (<>

                            {/* show for teacher NavbarLink*/}
                        </>)}
                        {admin === '0' && (<>
                            {/* show for student NavbarLink*/}
                        </>)}
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
                    {admin === null && (<>
                        <Signwrap onClick={() => {
                            setToggleSignin((value) => !value); // set the value opposite of current value
                        }}>
                            <SignButton />
                        </Signwrap>
                        {toggleSignin && (<SigninCard />)}
                    </>)}
                    {admin === '1' && (<>
                        <Signwrap>
                            <NavbarButton onClick={(e) => LogoutToHome(e)}>log out</NavbarButton>
                        </Signwrap>
                    </>)}
                    {admin === '0' && (<>
                        <Signwrap>
                            <NavbarButton onClick={(e) => LogoutToHome(e)}>log out</NavbarButton>
                        </Signwrap>
                    </>)}
                </NavbarSignContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                // display extended menu when state is true
                <NavbarExtendedContainer>
                    {admin === null && (<>
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
                    </>)}
                    {admin === '1' && (<>
                        {/* show for teacher NavbarLinkExtended*/}
                        <NavbarSignContainerExtended >
                            <NavbarButton onClick={(e) => LogoutToHome(e)}>log out</NavbarButton>
                        </NavbarSignContainerExtended>
                    </>)}
                    {admin === '0' && (<>
                        {/* show for student NavbarLinkExtended*/}
                        <NavbarSignContainerExtended >
                            <NavbarButton onClick={(e) => LogoutToHome(e)}>log out</NavbarButton>
                        </NavbarSignContainerExtended>
                    </>)}

                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar;

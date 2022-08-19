import React, { useState } from "react";
import { useDB } from "../../ServerContext";
import { useNavigate } from "react-router-dom";
import { RiAccountBoxFill, RiMenuFill, RiCloseFill } from 'react-icons/ri';
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
    NavbarButton,
    OpenLinksButtonContainer
} from "./NavbarStyle";
import LogoImg from "../../assets/logo.png";
import SigninCard from "./SigninCard";

export function Navbar() {
    var navigate = useNavigate()
    // used to manage the "extend button"
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [toggleSignin, setToggleSignin] = useState(false);
    const { admin, logout } = useDB();

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
                        {/* public */}
                        {admin === null && (<>
                            <NavbarLink to="/">HOME</NavbarLink>
                            <NavbarLink to="/aboutus">ABOUT US</NavbarLink>
                            <NavbarLink to="/ourservices">OUR SERVICES</NavbarLink>
                            <NavbarLink to="/news">NEWS</NavbarLink>
                            <NavbarLink to="/becomeatutor">BECOME A TUTOR</NavbarLink>
                            <NavbarLink to="/contactus">CONTACT US</NavbarLink>
                        </>)}
                        {/* admin */}
                        {admin === '1' && (<>
                            <NavbarLink to="/dashboard">HOME</NavbarLink>
                            <NavbarLink to="/allocation">ALLOCATION</NavbarLink>
                            <NavbarLink to="/createmeeting">CREATE MEETING</NavbarLink>
                            <NavbarLink to="/accountDetails">ACCOUNT DETAILS</NavbarLink>
                            <NavbarLink to="/addNews">ADD NEWS</NavbarLink>
                        </>)}
                        {/* tutor */}
                        {admin === '2' && (<>
                            <NavbarLink to="/dashboard">HOME</NavbarLink>
                            <NavbarLink to="/changeavailability">CHANGE AVAILABILITY</NavbarLink>
                            <NavbarLink to="/accountDetails">ACCOUNT DETAILS</NavbarLink>
                            <NavbarLink to="/dashboard">NEED HELP?</NavbarLink>
                            {/* show for teacher NavbarLink*/}
                        </>)}
                        {/* student */}
                        {admin === '3' && (<>
                            <NavbarLink to="/dashboard">HOME</NavbarLink>
                            <NavbarLink to="/booklesson">BOOK A LESSON</NavbarLink>
                            <NavbarLink to="/accountDetails">ACCOUNT DETAILS</NavbarLink>
                            <NavbarLink to="/dashboard">NEED HELP?</NavbarLink>
                            {/* show for student NavbarLink*/}
                        </>)}
                        <OpenLinksButtonContainer>
                            <OpenLinksButton
                                onClick={() => {
                                    setExtendNavbar((value) => !value);     // set the value opposite of current value
                                }}
                            >
                                {
                                    // display hamburger menu when state is false, X when true
                                    extendNavbar ? <RiCloseFill /> : <RiMenuFill />
                                }
                            </OpenLinksButton>
                        </OpenLinksButtonContainer>
                    </NavbarLinkContainer>
                </RightContainer>
                <NavbarSignContainer >
                    {/* public */}
                    {admin === null && (<>
                        <Signwrap onClick={() => {
                            setToggleSignin((value) => !value); // set the value opposite of current value
                        }}>
                            <SignButtonWrap>
                                <RiAccountBoxFill className="sign-in-icon" fontSize="3em" />
                                <NavbarButton >SIGN IN</NavbarButton>
                            </SignButtonWrap>
                        </Signwrap>
                        {toggleSignin && (<SigninCard />)}
                    </>)}
                    {/* admin */}
                    {admin === '1' && (<>
                        <Signwrap>
                            <SignButtonWrap>
                                <RiAccountBoxFill fontSize="3em" />
                                <NavbarButton onClick={(e) => LogoutToHome(e)}>SIGN OUT</NavbarButton>
                            </SignButtonWrap>
                        </Signwrap>
                    </>)}
                    {/* tutor */}
                    {admin === '2' && (<>
                        <Signwrap>
                            <SignButtonWrap>
                                <RiAccountBoxFill fontSize="3em" />
                                <NavbarButton onClick={(e) => LogoutToHome(e)}>SIGN OUT</NavbarButton>
                            </SignButtonWrap>
                        </Signwrap>
                    </>)}
                    {/* student */}
                    {admin === '3' && (<>
                        <Signwrap>
                            <SignButtonWrap>
                                <RiAccountBoxFill fontSize="3em" />
                                <NavbarButton onClick={(e) => LogoutToHome(e)}>SIGN OUT</NavbarButton>
                            </SignButtonWrap>
                        </Signwrap>
                    </>)}
                </NavbarSignContainer>
            </NavbarInnerContainer>

            {extendNavbar && (
                // display extended menu when state is true
                <NavbarExtendedContainer onClick={() => {
                    setExtendNavbar((value) => !value);     // set the value opposite of current value
                }}>
                    {admin === null && (<>
                        <NavbarLinkExtended to="/" >HOME</NavbarLinkExtended>
                        <NavbarLinkExtended to="/aboutus">ABOUT US</NavbarLinkExtended>
                        <NavbarLinkExtended to="/ourservices">OUR SERVICES</NavbarLinkExtended>
                        <NavbarLinkExtended to="/news">NEWS</NavbarLinkExtended>
                        <NavbarLinkExtended to="/becomeatutor">BECOME A TUTOR</NavbarLinkExtended>
                        <NavbarLinkExtended to="/contactus">CONTACT US</NavbarLinkExtended>
                        <NavbarSignContainerExtended >
                            <RiAccountBoxFill fontSize="3em" />
                            <NavbarLinkExtended to="/signin">SIGN IN</NavbarLinkExtended>
                        </NavbarSignContainerExtended>
                    </>)}
                    {admin === '1' && (<>
                        {/* show for admin NavbarLinkExtended*/}
                        <NavbarLinkExtended to="/dashboard" >HOME</NavbarLinkExtended>
                        <NavbarLinkExtended to="/allocation">ALLOCATION</NavbarLinkExtended>
                        <NavbarLinkExtended to="/createmeeting">CREATE MEETING</NavbarLinkExtended>
                        <NavbarLinkExtended to="/accountDetails">ACCOUNT DETAILS</NavbarLinkExtended>
                        <NavbarLinkExtended to="/addNews">ADD NEWS</NavbarLinkExtended>
                        <NavbarSignContainerExtended >
                            <RiAccountBoxFill fontSize="3em" />
                            <NavbarButton onClick={(e) => LogoutToHome(e)}>SIGN OUT</NavbarButton>
                        </NavbarSignContainerExtended>
                    </>)}
                    {admin === '2' && (<>
                        {/* show for teacher NavbarLinkExtended*/}
                        <NavbarLinkExtended to="/dashboard" >HOME</NavbarLinkExtended>
                        <NavbarLinkExtended to="/changeavailability">CHANGE AVAILABILITY</NavbarLinkExtended>
                        <NavbarLinkExtended to="/accountDetails">ACCOUNT DETAILS</NavbarLinkExtended>
                        <NavbarLinkExtended to="/dashboard">NEED HELP?</NavbarLinkExtended>
                        <NavbarSignContainerExtended >
                            <RiAccountBoxFill fontSize="3em" />
                            <NavbarButton onClick={(e) => LogoutToHome(e)}>SIGN OUT</NavbarButton>
                        </NavbarSignContainerExtended>
                    </>)}
                    {admin === '3' && (<>
                        {/* show for student NavbarLinkExtended*/}
                        <NavbarLinkExtended to="/dashboard" >HOME</NavbarLinkExtended>
                        <NavbarLinkExtended to="/booklesson">BOOK A LESSON</NavbarLinkExtended>
                        <NavbarLinkExtended to="/accountDetails">ACCOUNT DETAILS</NavbarLinkExtended>
                        <NavbarLinkExtended to="/dashboard">NEED HELP?</NavbarLinkExtended>
                        <NavbarSignContainerExtended >
                            <RiAccountBoxFill fontSize="3em" />
                            <NavbarButton onClick={(e) => LogoutToHome(e)}>SIGN OUT</NavbarButton>
                        </NavbarSignContainerExtended>
                    </>)}
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar;

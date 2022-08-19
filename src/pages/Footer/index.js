import React from 'react';
import{ FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
    FooterContatiner,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    WebsiteRights
} from './FooterStyle';

const Footer = () => {
  return (
    <FooterContatiner>
        <FooterWrap>
        <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/aboutus">Our mission</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/becomeatutor">Careers</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/contactus">Contact form</FooterLink>
                        <FooterLink to="/contactus">Business equiries</FooterLink>
                        <FooterLink to="/contactus">Office location</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Terms</FooterLinkTitle>
                        <FooterLink to="#">Terms of Service</FooterLink>
                        <FooterLink to="#">Privacy Policy</FooterLink>
                        <FooterLink to="#">Agency</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>Tech<span>Connect</span></SocialLogo>
                    <WebsiteRights>TechConnect ® {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label = "Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label = "Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label = "Youtube"><FaYoutube/></SocialIconLink>
                        <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label = "Twitter"><FaTwitter/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
      </FooterWrap>
    </FooterContatiner>
  );
};

export default Footer

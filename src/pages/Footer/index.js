import React from 'react';
import{ FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
    FooterContatiner,
    FooterWrap,
    FooterLinksContatiner,
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
        <FooterLinksContatiner>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/signin">Contact</FooterLink>
                        <FooterLink to="/signin">Support</FooterLink>
                        <FooterLink to="/signin">Destinations</FooterLink>
                        <FooterLink to="/signin">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/signin">Submit Video</FooterLink>
                        <FooterLink to="/signin">Ambassadors</FooterLink>
                        <FooterLink to="/signin">Agency</FooterLink>
                        <FooterLink to="/signin">Influencer</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/signin">Instagram</FooterLink>
                        <FooterLink to="/signin">Facebook</FooterLink>
                        <FooterLink to="/signin">Youtube</FooterLink>
                        <FooterLink to="/signin">Twitter</FooterLink>

                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContatiner>
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

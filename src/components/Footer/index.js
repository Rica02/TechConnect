import React from 'react';
import{FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa';
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
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>TechConnect</SocialLogo>
                    <WebsiteRights>TechConnect ® {new Date().getFullYear()} All rithts reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.Facebook.com/" target="_blank" aria-label = "Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="//www.Instagram.com/" target="_blank" aria-label = "Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="//www.Youtube.com/" target="_blank" aria-label = "Youtube"><FaYoutube/></SocialIconLink>
                        <SocialIconLink href="//www.teitter.com/" target="_blank" aria-label = "Twitter"><FaTwitter/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
      </FooterWrap>
    </FooterContatiner>
  );
};

export default Footer
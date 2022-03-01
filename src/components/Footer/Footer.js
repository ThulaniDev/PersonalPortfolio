import React from 'react';
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>Cell</LinkTitle>
        <LinkItem href={'cell:064 165 9867'}>064 165 9867</LinkItem>

      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href={'mailto:thulanimolisenyanedev@gmail.com'}>thulanimolisenyanedev@gmail.com</LinkItem>

      </LinkColumn>
     
     </LinkList>
     <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>I'am the missing piece in your puzzle.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons>
            <Link href='https://github.com/ThulaniDev/'>
              <AiFillGithub size={21}/>
            </Link>
          </SocialIcons>
          <SocialIcons>
            <Link href='https://www.linkedin.com/in/thulani-molisenyane-39286517b/'>
              <AiFillLinkedin size={21}/>
            </Link>
          </SocialIcons>
          {/* <SocialIcons>
            <Link href='https://www.instagram.com/thulanimolisenyanedev/'>
              <AiFillInstagram size={21}/>
            </Link>
          </SocialIcons> */}
        </SocialContainer>
     </SocialIconsContainer>
     
   </FooterWrapper>
  );
};

export default Footer;

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiJupiter } from 'react-icons/gi';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <GiJupiter size={21}/> <span style={{marginLeft: '10px',marginTop: '5px'}}>Thulani</span>
    </Div1>
    <Div2>
      <NavLink href="#Projects">Projects</NavLink>
      <NavLink href="#Technologies">Technologies</NavLink>
      <NavLink href="#About">About</NavLink>
    </Div2>
    <Div3>
    <SocialIcons>
        <Link href='#'>
          <AiFillGithub size={21}/>
        </Link>
      </SocialIcons>
      <SocialIcons>
        <Link href='#'>
          <AiFillLinkedin size={21}/>
        </Link>
      </SocialIcons>
      {/* <SocialIcons>
        <Link href='#'>
          <AiFillInstagram size={21}/>
        </Link>
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;

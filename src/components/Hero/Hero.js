import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

//handlers
const aboutHandler = (e)=>{
  e.preventDefault()
  window.location = '#About'

}

const Hero = (props) => (
  
  <Section row nopadding>
    <LeftSection>
    <SectionTitle main center>
      Hi, I'm Thulani Molisenyane.<br/>
      I build stuff on the Internet.
    </SectionTitle>
    <SectionText>
      Solving problems, is my main contribution to mankind.
    </SectionText>
    <Button onClick={(e)=>aboutHandler(e)}>
      About Me      
    </Button>
    </LeftSection>
  </Section>
  
);

export default Hero;
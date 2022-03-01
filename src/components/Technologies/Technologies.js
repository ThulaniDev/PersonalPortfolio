import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id='Technologies'>
    <SectionDivider/>
    <SectionTitle main>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web and mobile development world.
      From Back-End to Front-End.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={32}/>
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>
            Experience with
            <br/>
            React.js
            <br/>
            React-Native
            <br/>
            HTML5
            <br/>
            CSS
          
          </ListParagraph>

        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={32}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            <br/>
            Node.js
            <br/>
            Express
            <br/>
            MongoDB
            
          </ListParagraph>

        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={32}/>
        <ListContainer>
          <ListTitle>UX/UI Design</ListTitle>
          <ListParagraph>
            Experience with
            <br/>
            Figma
            <br/>
            Adobe XD
            
          </ListParagraph>

        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

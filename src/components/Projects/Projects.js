import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='Projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
        projects.map(({id, description, title, image, tags, visit, source}, index)=>{
          return(
              <BlogCard key={id}>
                <Img src={image}/>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr/>
                </TitleContent>
                <CardInfo>
                  {description}
                </CardInfo><br/>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {tags.map((tag, index )=>{
                      return(
                      <Tag key={index}>{tag}</Tag>
                      )
                    })}

                  </TagList>
                </div>
                <UtilityList>
                  {/* <ExternalLinks href={visit}>Code</ExternalLinks>
                  <ExternalLinks href={source}>Source</ExternalLinks> */}
                </UtilityList>
              
              </BlogCard>
          )
          
        })
      }

    </GridContainer>
    <br/>
  </Section>
);

export default Projects;
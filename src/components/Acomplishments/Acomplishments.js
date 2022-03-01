import React from 'react';
import {AiOutlineRead, AiFillGoogleCircle, AiFillBuild, AiTwotoneTrophy} from 'react-icons/ai';


import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import {data} from '../../constants/constants'


const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Hobbies
    </SectionTitle>
    <Boxes>
      
        <Box key={1}>
          <BoxNum><AiOutlineRead size={33}/></BoxNum>
          <BoxText>Reading.</BoxText>

        </Box>
        <Box key={2}>
          <BoxNum><AiFillBuild size={33}/></BoxNum>
          <BoxText>Building Personal Projects.</BoxText>

        </Box> 
        <Box key={3}>
          <BoxNum><AiTwotoneTrophy size={33}/></BoxNum>
          <BoxText>Playing Video Games.</BoxText>

        </Box>
        <Box key={4}>
          <BoxNum><AiFillGoogleCircle size={33}/></BoxNum>
          <BoxText>Discovering new Technologies.</BoxText>

        </Box> 
     
    </Boxes>
  </Section>
);

export default Acomplishments;

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTextAbout, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { TimeLineData } from '../../constants/constants';
import {saveAs} from 'file-saver'

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  //download handler
  const downloadHandler = (e)=>{
    e.preventDefault()
    // window.location = '/files/Thulani_Molisenyane_Resume_updated2022.pdf'
    const blob = new Blob(['ThulaniMolisenyane C.V'], {type: 'text/plain;charset=utf-8'})
    saveAs(blob, 'Thulani_Molisenyane_Resume_updated2022.pdf')
  }

  return (
    <Section nopadding id={'About'}>
      <SectionTitle main>
        About
      </SectionTitle>
      <SectionTextAbout>
        My name is Thulani Molisenyane. I was born and raised in South Africa in a provice called Free State. From a young age I always wanted to be part of something big, something that helps humanity thrive. It was not clear from a young age, 
        what that could be, but I knew what ever that could be, it has to do with me solving problems.
        After I graduated High School in 2016, that was when I was introduced to programming through a learnership programme
        called "Systems Development: Information Technology NQL 4".
        It was a 12 months programme, and it helped me alot to understand the basics. From there it was clear for me to decide which part of I.T field I was good at, and I chose development. 
        In 2019, I was offered a position as Quality Assurance in Dotmodus, it was a 12 months programme. Before the programme came to an end, I decided to quit mainly because I was not happy with that position and I felt it was taking me a step back from being a developer. 
        As I was unemployed I got more time to work on my skills and myself to be a better developer.
      </SectionTextAbout>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((data, index)=>(
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT-1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e)=>handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {data.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{data.text}</CarouselItemText>
              </CarouselItem>

            </CarouselMobileScrollNode>
          ))

          }
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((data, index)=>(
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e)=> handleClick(e, index)}
            type='button'
          >
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>

        ))}
      </CarouselButtons>
      <Button onClick={(e)=>downloadHandler(e)}>
          Download C.V 
      </Button>

      <SectionDivider/>

    </Section>
  );
};

export default Timeline;

import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px; 
`;

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: ${colours.grey80};
  margin-bottom: 10px;
  grid-column-start: span 2;
`;



const Facility = styled.div`
  background: #F6F6F6;
  width: 100;
  padding: 20px;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 26px 1fr;
  grid-template-areas: 
    'image title'
    'image about';
  grid-gap: 10px 20px;

  span {
    grid-area: title;
    font-size: 1.8em;
    line-height: 26px;
  }
`;

const Image = styled.div`
  width: 250px;
  height: 180px;
  background: #d0d0d0;
  grid-area: image;
`;

const About = styled.div`
  grid-area: about;
  font-weight: 400;
`;

const Facilities: FC = () => {
  return (
    <Container>
      <Title>Facilities</Title>


      <Facility>
        <Image />
        <span>Tuck shop</span>
        <About>
          Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
        </About>
      </Facility>

      <Facility>
        <Image />
        <span>Campfire Circle</span>
        <About>
          Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
        </About>
      </Facility>

      <Facility>
        <Image />
        <span>Shower &amp; Toilet Block</span>
        <About>
          Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
        </About>
      </Facility>

      <Facility>
        <Image />
        <span>Chapel Area</span>
        <About>
          Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
        </About>
      </Facility>
    </Container>
  );
};

export default Facilities;
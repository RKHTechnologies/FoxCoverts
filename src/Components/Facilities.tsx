import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px; 

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: ${colours.grey80};
  margin-bottom: 10px;
  grid-column-start: span 2;

  @media(max-width: 900px) {
    grid-column-start: 1;
  }
  @media(max-width: 500px) {
    font-size: 15vw;
  }
`;



const Facility = styled.div`
  background: #F6F6F6;
  width: 100;
  padding: 20px;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 10px 20px;

  @media(max-width: 1200px) {
    grid-template-columns: 200px 1fr;
  }
  @media(max-width: 500px) {
    grid-template-columns: 1fr;
  }


  h2 {
    font-size: 1.8em;
    margin: 0;
    margin-bottom: 5px;
    line-height: 32px;

    @media(max-width: 500px) {
      text-align: center;
    }
  }
`;

const Image = styled.div`
  width: 100%;
  height: 180px;
  background: #d0d0d0;
`;

const About = styled.div`
  font-weight: 400;
`;

const Facilities: FC = () => {
  return (
    <Container>
      <Title>Facilities</Title>


      <Facility>
        <Image />
        <div>
          <h2>Tuck shop</h2>
          <About>
            Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
          </About>
        </div>
      </Facility>

      <Facility>
        <Image />
        <div>
          <h2>Campfire Circle</h2>
          <About>
            Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
          </About>
        </div>
      </Facility>

      <Facility>
        <Image />
        <div>
          <h2>Shower &amp; Toilet Block</h2>
          <About>
            Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
          </About>
        </div>
      </Facility>

      <Facility>
        <Image />
        <div>
          <h2>Chapel Area</h2>
          <About>
            Our Tuck Shop sells a range of sweets, confectionery, crisps, soft drinks, badges and souvenirs (subject to availability).  Opening times are by arrangement with the Duty Warden.
          </About>
        </div>
      </Facility>
    </Container>
  );
};

export default Facilities;
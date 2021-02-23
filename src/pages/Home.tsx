import React, { FC } from 'react';
import styled from 'styled-components';
import Contact from '../Components/Contact';
import HeroCarousel from '../Components/HeroCarousel';
import Footer from '../Shared/Footer';
import { PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';

interface SectionProps {
  fullwidth?: boolean;
  lastItem?: boolean;
}

export const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: ${(p: SectionProps) => p.fullwidth ? "20px 0 100px" : "20px 30px 100px"};
  padding-bottom: ${(p: SectionProps) => p.lastItem ? "0 !important" : null};
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 20px 0 50px;
  }
`;

const Home: FC = () => {
  return (
    <PageBodyContainer>
      <HeroCarousel />

      <Section id="About">
        <div className="wrapper">
          About the campsite    
        </div>
      </Section>

      <Section id="Bookings">
        <div className="wrapper">
          Bookings link    
        </div>
      </Section>

      <Section id="WhereWeAre">
        <div className="wrapper">
          Where we are    
        </div>
      </Section>

      <Section id="Sections">
        <div className="wrapper">
          Sections links    
        </div>
      </Section>

      <Section id="Facilities">
        <div className="wrapper">
          Facilities    
        </div>
      </Section>

      <Section id="ContactUs" fullwidth lastItem>
        <Contact />
      </Section>

      <Footer />
    </PageBodyContainer>
  );
}

export default Home;
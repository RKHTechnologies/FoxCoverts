import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import { Section } from './Home';

const TextOverlay = styled.div`
  font-size: 6vw;
  font-weight: 400;
  width: 100%;
  height: 65%;
  color: ${colours.light};
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(115,115,115,0.15);

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 10vw;
    font-weight: 600;
  }

  @media(max-width: 700px) {
    height: 300px;
  }  
`;

const Activity = styled.div`
  width: 100%;
  background: #b1b1b1;
  height: 350px;
  margin-top: 80px;
`;

const Image = styled.div`
  width: 100%;
`;

const Activities: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="highRopesHero" small/>
      <TextOverlay>Activities</TextOverlay>

      <Section id="Bookings">
        <div className="wrapper">
          <Activity>
            <Image />
          </Activity>      
        </div>
      </Section>

    </PageBodyContainer>
  );
}

export default Activities;
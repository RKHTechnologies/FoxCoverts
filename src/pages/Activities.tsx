import React, { FC } from 'react';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';

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

const Activities: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="highRopesHero" small/>
      <TextOverlay>Activities</TextOverlay>

    </PageBodyContainer>
  );
}

export default Activities;
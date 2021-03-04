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

const ActivitiesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Activity = styled.div`
  width: 400px;
  background: #F6F6F6;
  height: 380px;
  margin-top: 50px;
  box-shadow: 1px 2px 3px 1px #19191914;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.div`
  width: 100%;
  background: #e0e0e0;
  height: 250px;
`;

const Header = styled.div`
  font-size: 2.2em;
  font-weight: 600;
  text-align: center;
  margin: 5px 0;
`;

const Button = styled.div`
  background: ${colours.Teal};
  color: ${colours.light};
  font-weight: 400;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
`;

const Activities: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="highRopesHero" small/>
      <TextOverlay>Activities</TextOverlay>

      <Section id="Activities">
        <div className="wrapper">
          <ActivitiesContainer>
            
            <Activity>
              <Image />
              <Header>Low Rope Area</Header>
              <Button>Find out more</Button>
            </Activity>

            <Activity>
              <Image />
              <Header>Archery</Header>
              <Button>Find out more</Button>
            </Activity>

            <Activity>
              <Image />
              <Header>Climbing</Header>
              <Button>Find out more</Button>
            </Activity>

            <Activity>
              <Image />
              <Header>Air Rifles</Header>
              <Button>Find out more</Button>
            </Activity>

            <Activity>
              <Image />
              <Header>Pioneering</Header>
              <Button>Find out more</Button>
            </Activity>

            <Activity>
              <Image />
              <Header>Low Rope Area</Header>
              <Button>Find out more</Button>
            </Activity>

            <Activity>
              <Image />
              <Header>Boulders</Header>
              <Button>Find out more</Button>
            </Activity>

            <Activity>
              <Image />
              <Header>Frisbee Golf</Header>
              <Button>Find out more</Button>
            </Activity>
          </ActivitiesContainer>
        </div>
      </Section>

    

    </PageBodyContainer>
  );
}

export default Activities;
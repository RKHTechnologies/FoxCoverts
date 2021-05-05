import firebase from 'firebase';
import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import { databaseRead } from '../util/functions';
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
  background: #f1f1f1;
  padding-bottom: 50px;
`;

const Activity = styled.div`
  width: 400px;
  background: #FFFFFF;
  margin-top: 50px;
  box-shadow: 1px 2px 3px 1px #19191914;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.div`
  width: 100%;
  background: #e0e0e0;
  height: 250px;
  border-radius: 4px;
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
  &:hover {
    background: ${colours.Teal}ad;
  }
`;

interface IActivityItem {
  link: string;
  name: string;
  image: string;
  summary: string;
  pill1: string;
  pill2: string;
  pill3: string;
  pill4: string;
  priceTitle: string;
  pricingText: string;
}

const Activities: FC = () => {
  const [activitiesList, setactivitiesList] = useState<Array<IActivityItem>>();
  const history = useHistory();

   // Read
   useEffect(() => {
    const shopItems = firebase.database().ref("activities");
    shopItems.on("value", (snapshot: any) => {
      const items = snapshot.val();
      const listArray = [];
      for (let id in items) {
        listArray.push(items[id]);
      }
      setactivitiesList(listArray);
    });
  }, []);

  const handleNav = (link: string): void => {
      history.push(`${process.env.PUBLIC_URL}${link}`);
  }

   // Create
   const createNew = () => { 
    const ref = firebase.database().ref("activities");
    const newItem = {
      link: "parachute",
      name: "Parachute",
      image: "test",
      summary: "The Low Ropes course has cables and ropes strung between poles, 12 to 18 inches above the ground. The low rope elements present tests of physical strength, stamina, agility, balance, and flexibility (Suitable for Scouts and Explorers).<br /><br />The Trim Trail offers an exciting physical and mental challenge for children of all ages and ability levels and allows for cognitive and imaginary play. It develops co-ordination skills and provides exercise while having fun.<br /><br />The Spider's Web is a variety of ropes strung between poles, which resemble a spider's web. The group starts on one side of the web and must successfully reach the other side without touching any of the strands of the web. Each gap can only be used once. A spider placed on the web somewhere will watch over you. If it falls, the group must start over.",
      pill1: "Suitable for|All age groups",
      pill2: "Availability|March to December",
      pill3: "Session time|2 hours",
      pill4: "Number of participants per hour|12",
      priceTitle: "Cost (per 2 hours)",
      pricingText: "£20 Hinckley District Scouts<br />£25 Non-Hinckley District Scouts<br />£30 All other Groups",
    }
  
    ref.push(newItem);
  };

  return (
    <PageBodyContainer>
      <Hero image="highRopesHero" small/>
      <TextOverlay onClick={createNew}>Activities</TextOverlay>
        
        <ActivitiesContainer>
          {activitiesList ? activitiesList.map((item) => (
            <Activity onClick={() => handleNav(`/activities/${item.link}`)}>
              <Image />
              <Header>{item.name}</Header>
              <Button>Find out more</Button>
            </Activity>
          )) : ""}  

        </ActivitiesContainer>

    </PageBodyContainer>
  );
}

export default Activities;
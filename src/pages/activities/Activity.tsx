import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Pill from '../../Components/Pill';
import Document from '../../Components/Document';
import { imageLib, ImagesDesktop } from '../../Shared/ImageLib';
import { PageBodyContainer, SharedSettings } from '../../Shared/SharedStyles';
import DocumentSmall from '../../Components/DocumentSmall';
import { useParams } from 'react-router';
import { IActivityItem, IPillItem } from '../Activities';
import firebase from 'firebase';

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 100px;
`;

const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42%;
  
  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 54%;
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 3.6em;
  margin: auto;
  margin-bottom: 15px;
  font-weight: 600;  
  line-height: 46px;
  
  @media(max-width: ${SharedSettings.mobile}) {
    margin: 0 0 20px;
    font-size: 2.2em;
    text-align: center;
  }

  @media(max-width: 500px) {
    font-size: 2em;
    text-align: center;
    margin: 0 0 20px;
  }
`;

const Summary = styled.div`
  font-weight: 400;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const ImageContainer = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 50px;
`;

interface ImageProps {
  image: imageLib;
}

const MainImage = styled.div`
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
`;

const SecondaryImages = styled.div`
  width: 100%;
  height: 130px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 20px;
`;

const Image = styled.div`
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
`;

const PillGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const CostGroup = styled.div`
  h1 {
    font-weight: 600;
    margin-bottom: 0;
  }

  div {
    font-weight: 400;
  }
`;

const PricingText = styled.div`
  white-space: pre-wrap;
`;

const DocumentContainer = styled.div`
  margin-top: 30px;
  display: flex;

`;


const pillsList = (pills: { [name: string]: IPillItem }) => {
  let listItems = [];
  for (const pill in pills) {
    listItems.push(pills[pill]);
  }
  return <>
          {listItems.map((item, i) => <Pill colour={item.colour} subject={item.title} value={item.text} key={i} />)}
        </>;
}


const Activity: FC = () => {
  const [activity, setActivity] = useState<IActivityItem>();
  let { route } = useParams<{ route: string }>();
  
  useEffect(() => {
    const shopItems = firebase.database().ref("activities");
    shopItems.on("value", (snapshot: any) => {
      const items = snapshot.val();
      for (let id in items) {
        if (items[id].link === route) {
          setActivity(items[id]);   
        }
      }
    });
  }, []);

  console.log(route);
  console.log(activity);

  return (
    <PageBodyContainer>
      <Container>
        <Left>
          <ImageContainer>
            <MainImage image={'ropeSkills'} />
            <SecondaryImages>
              <Image image={'ropeSkills'} />
              <Image image={'ropeSkills'} />
              <Image image={'ropeSkills'} />
            </SecondaryImages>
          </ImageContainer>
        </Left>

        <Right>
          <Title>{activity?.name}</Title>
          <Summary>{activity?.summary}</Summary>
          <PillGrid>
            {pillsList(activity?.pills ?? {})}
          </PillGrid>
          <CostGroup>
            <h1>{activity?.priceTitle}</h1>
            <PricingText>{activity?.pricingText}</PricingText>
          </CostGroup>
          <DocumentContainer>
            <DocumentSmall name="Risk Assessments" filename="GiftAid.pdf" accent="Blue" />
          </DocumentContainer>
        </Right>
      </Container>
    </PageBodyContainer>
  );
}

export default Activity;
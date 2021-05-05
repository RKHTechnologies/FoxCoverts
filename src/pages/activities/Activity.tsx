import React, { FC } from 'react';
import styled from 'styled-components';
import Pill from '../../Components/Pill';
import Document from '../../Components/Document';
import { imageLib, ImagesDesktop } from '../../Shared/ImageLib';
import { PageBodyContainer, SharedSettings } from '../../Shared/SharedStyles';
import DocumentSmall from '../../Components/DocumentSmall';
import { useParams } from 'react-router';

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

const DocumentContainer = styled.div`
  margin-top: 30px;
  display: flex;

`;


const Activity: FC = () => {
  let { route } = useParams<{ route: string }>();
  
  

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
          <Title>{route}</Title>
          <Summary>
            The Low Ropes course has cables and ropes strung between poles, 12 to 18 inches above the ground.  The low rope elements present tests of physical strength, stamina, agility, balance, and flexibility (Suitable for Scouts and Explorers).
            <br /><br />
            The Trim Trail offers an exciting physical and mental challenge for children of all ages and ability levels and allows for cognitive and imaginary play.  It develops co-ordination skills and provides exercise while having fun.
            <br /><br />
            The Spider's Web is a variety of ropes strung between poles, which resemble a spider's web. The group starts on one side of the web and must successfully reach the other side without touching any of the strands of the web.  Each gap can only be used once.  A spider placed on the web somewhere will watch over you.  If it falls, the group must start over. 
          </Summary>
          <PillGrid>
            <Pill colour="Purple" subject="Suitable for" value="All age groups" />
            <Pill colour="Green" subject="Availability" value="April to October" />
            <Pill colour="Red" subject="Session time" value="2 hours" />
            <Pill colour="Blue" subject="Included" value="Low Ropes, Trim Trail and Spider's Web" />
          </PillGrid>
          <CostGroup>
            <h1>Cost (per 2 hours):</h1>
            <div>£20 Hinckley District Scouts</div>
            <div>£25 Non-Hinckley District Scouts</div>
            <div>£30 All other Groups</div>
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
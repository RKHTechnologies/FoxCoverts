import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../../Shared/ImageLib';
import { PageBodyContainer, SharedSettings } from '../../Shared/SharedStyles';

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
  width: 50%;
  
  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 3em;
  margin: auto;
  margin-bottom: 15px;
  
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
  height: 100px;
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

const LowRopeArea: FC = () => {

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
          <Title>Low Rope Area</Title>

        </Right>
      </Container>
    </PageBodyContainer>
  );
}

export default LowRopeArea;
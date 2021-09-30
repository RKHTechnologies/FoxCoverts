import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../pages/Activities';
import PillAccommodation from './PillAccommodation';
import { faBed, faExpandArrowsAlt, faFaucet, faRestroom } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';

const Container = styled.div`
  /* width: 100%; */
  width: 360px;
  height: 700px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px 1px #19191914;
  transition: all 0.3s ease;
  margin-right: 20px;

  /* cursor: pointer; */
/* 
  &:hover {
    transform: scale(1.1);
  } */
`;

interface IImageProps {
  image: imageLib;
}

const Image = styled.div`
  height: 240px;
  background: #e0e0e0;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background: url(${(p: IImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
`;

const Description = styled.div`
  font-weight: 400;
  height: calc(100% - 440px);
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const PillContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding-bottom: 10px;
`;

interface IProps {
  title: string;
  description: string;
  image: imageLib;
  pitchSize: string;
  tap: number;
  wc: number;
  sleeps: number;
}

const CampsiteItem: FC<IProps> = ({ title, description, image, pitchSize, tap, wc, sleeps }: IProps) => {
  
  const handleBookings = (): void => {
    window.open("https://www.onlinescoutmanager.co.uk/v/johns-lee-wood", "_blank");
  }

  return (
    <Container>
      <Image image={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PillContainer>
        <PillAccommodation colour={"Red"} subject={"Pitch Size"} value={`${pitchSize}`} icon={faExpandArrowsAlt} />
        <PillAccommodation colour={"Blue"} subject={"Tap Distance"} value={`${tap}m`} icon={faFaucet} />
        <PillAccommodation colour={"Purple"} subject={"WC Distance"} value={`${wc}m`} icon={faRestroom} />
        <PillAccommodation colour={"Green"} subject={"Sleeps"} value={`${sleeps}`} icon={faBed} />
      </PillContainer>
      
      {/* <Button onClick={() => history.push(`${process.env.PUBLIC_URL}/bookings`)}>Book Now</Button> */}
      <Button onClick={handleBookings}>Book Now</Button>
    </Container>
  );
}

export default CampsiteItem;
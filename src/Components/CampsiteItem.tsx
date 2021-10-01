import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../pages/Activities';
import PillAccommodation from './PillAccommodation';
import { faBed, faExpandArrowsAlt, faFaucet, faRestroom } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { imageLib } from '../Shared/ImageLib';
import { Container, Image } from './AccommodationItem';

const CampsiteContainer = styled(Container)`
  height: 550px;
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

  b {
    font-weight: 800;
  }
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
    <CampsiteContainer>
      <Image image={image} />
      <Title>{title}</Title>
      <Description><b>Features: </b><br />{description}</Description>
      <PillContainer>
        <PillAccommodation colour={"Red"} subject={"Pitch Size"} value={`${pitchSize}`} icon={faExpandArrowsAlt} />
        <PillAccommodation colour={"Blue"} subject={"Tap Distance"} value={`${tap}m`} icon={faFaucet} />
        <PillAccommodation colour={"Purple"} subject={"WC Distance"} value={`${wc}m`} icon={faRestroom} />
        <PillAccommodation colour={"Green"} subject={"Sleeps"} value={`${sleeps}`} icon={faBed} />
      </PillContainer>
      
      {/* <Button onClick={() => history.push(`${process.env.PUBLIC_URL}/bookings`)}>Book Now</Button> */}
      <Button onClick={handleBookings}>Book Now</Button>
    </CampsiteContainer>
  );
}

export default CampsiteItem;
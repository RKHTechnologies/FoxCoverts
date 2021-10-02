import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../pages/Activities';
import PillAccommodation from './PillAccommodation';
import { faBed, faExpandArrowsAlt, faFaucet, faRestroom } from '@fortawesome/free-solid-svg-icons';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { SharedSettings } from '../Shared/SharedStyles';

export const Container = styled.div`
  width: 360px;
  height: 710px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px 2px #19191921;
  transition: all 0.3s ease;
  margin: 10px;

  @media(max-width: 700px) {
    margin: 0 0 20px;
  }
`;

export interface IImageProps {
  image: imageLib;
}

export const Image = styled.div`
  height: 240px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background: url(${(p: IImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  background-color: #e0e0e0;
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
  pitchSize: number;
  tap: number;
  wc: number;
  sleeps: number;
}

const AccommodationItem: FC<IProps> = ({ title, description, image, pitchSize, tap, wc, sleeps }: IProps) => {
  // const history = useHistory();

  const handleBookings = (): void => {
    window.open("https://www.onlinescoutmanager.co.uk/v/johns-lee-wood", "_blank");
  }

  return (
    <Container>
      <Image image={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PillContainer>
        <PillAccommodation colour={"Red"} subject={"Pitch Size"} value={`${pitchSize}m2`} icon={faExpandArrowsAlt} />
        <PillAccommodation colour={"Blue"} subject={"Tap Distance"} value={`${tap}m`} icon={faFaucet} />
        <PillAccommodation colour={"Purple"} subject={"WC Distance"} value={`${wc}m`} icon={faRestroom} />
        <PillAccommodation colour={"Green"} subject={"Sleeps"} value={`${sleeps}`} icon={faBed} />
      </PillContainer>
      
      {/* <Button onClick={() => history.push(`${process.env.PUBLIC_URL}/bookings`)}>Book Now</Button> */}
      <Button onClick={handleBookings}>Book Now</Button>
    </Container>
  );
}

export default AccommodationItem;
import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../pages/Activities';
import PillAccommodation from './PillAccommodation';

const Container = styled.div`
  width: 100%;
  height: 700px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px 1px #19191914;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.div`
  height: 240px;
  background: #e0e0e0;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
`;

const Description = styled.div`
  font-weight: 400;
  height: calc(100% - 526px);
  overflow: hidden;
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


interface IProps {
  title: string;
  description: string;
}

const AccommodationItem: FC<IProps> = ({ title, description }: IProps) => {
  return (
    <Container>
      <Image />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PillContainer>
        <PillAccommodation colour={"Purple"} subject={"Pitch Size"} value={"hello"}/>
        <PillAccommodation colour={"Purple"} subject={"Tap Distance"} value={"hello"}/>
        <PillAccommodation colour={"Purple"} subject={"WC Distance"} value={"hello"}/>
        <PillAccommodation colour={"Purple"} subject={"Sleeps"} value={"hello"}/>
      </PillContainer>
      
      <Button>Book Now</Button>
    </Container>
  );
}

export default AccommodationItem;
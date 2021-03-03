import React, { FC } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  @media(max-width: 1250px) {
    grid-gap: 20px;
  }

  @media(max-width: 1100px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const CardContainer: FC = () => {
  return (
    <Container>
      <Card image='campingSquare' primary='Accommodation' secondary='' url='/accommodation' accent='grey40' />
      <Card image='ropeSkills' primary='Activities' secondary='' url='/activities' accent='grey40' />
      <Card image='scoutShop' primary='Shop' secondary='' url='/shop' accent='grey40' />     
    </Container>
  );
}

export default CardContainer;
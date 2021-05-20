import React, { FC } from 'react';
import styled from 'styled-components';
import { PageBodyContainer } from '../Shared/SharedStyles';

const AccommodationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

const AccommodationItem = styled.div`
  width: 350px;
  height: 700px;
  background: #acacac;
`;

const Accommodation: FC = () => {
  return (
    <PageBodyContainer>
      <AccommodationContainer>
        
        <AccommodationItem></AccommodationItem>
        <AccommodationItem></AccommodationItem>
        <AccommodationItem></AccommodationItem>
        <AccommodationItem></AccommodationItem>
        <AccommodationItem></AccommodationItem>

      </AccommodationContainer>
    </PageBodyContainer>
  );
}

export default Accommodation;
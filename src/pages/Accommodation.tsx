import React, { FC } from 'react';
import styled from 'styled-components';
import AccommodationItem from '../Components/AccommodationItem';
import { PageBodyContainer } from '../Shared/SharedStyles';

const AccommodationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  background: #F1F1F1;
  width: 100%;
  height: 100%;
  padding: 45px 20px;
  box-sizing: border-box;
`;

const Accommodation: FC = () => {
  return (
    <PageBodyContainer>
      <AccommodationContainer>
        
        <AccommodationItem title="Hammocks" description="test"/>
        <AccommodationItem title="Test" description="test"/>
        <AccommodationItem title="George Wilson Building" description="test"/>
        <AccommodationItem title="Hammocks" description="test"/>
        <AccommodationItem title="Hammocks" description="test"/>

      </AccommodationContainer>
    </PageBodyContainer>
  );
}

export default Accommodation;
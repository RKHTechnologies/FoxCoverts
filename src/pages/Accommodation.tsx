import React, { FC } from 'react';
import styled from 'styled-components';
import AccommodationItem from '../Components/AccommodationItem';
import { PageBodyContainer } from '../Shared/SharedStyles';

const AccommodationContainer = styled.div`
  /* margin: 30px 20px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  background: #F1F1F1;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
`;

const Accommodation: FC = () => {
  return (
    <PageBodyContainer>
      <AccommodationContainer>
        
        <AccommodationItem title="Hammocks"/>
        <AccommodationItem title="Test"/>
        <AccommodationItem title="George Wilson Building"/>
        <AccommodationItem title="Hammocks"/>
        <AccommodationItem title="Hammocks"/>

      </AccommodationContainer>
    </PageBodyContainer>
  );
}

export default Accommodation;
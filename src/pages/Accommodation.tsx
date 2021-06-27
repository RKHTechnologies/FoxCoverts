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
        <AccommodationItem title="The Bus Shelter" description="The newly refurbished Bus Shelter has one large room which is ideal for use as an activity room, classroom, meeting venue or sleeping area.  It has a small kitchenette and is heated by electric wall heaters.  The price quoted is for building hire only and excludes campsite fees."/>
        <AccommodationItem title="George Wilson Building" description="The George Wilson Building is located in the main paddock area and makes an ideal daytime or sleepover base.  It has a main hall, kitchen and separate Leaders' room. The hall has benches and tables and will accommodate about fifty people.  Heating is provided by a wood-burning fire and electric wall and storage heaters.  The price quoted is for building hire only and excludes campsite fees. (Any persons sleeping overnight in building is charged as per campsite fees)"/>
        <AccommodationItem title="Tent Pitch A" description="test"/>
        <AccommodationItem title="Tent Pitch B" description="test"/>

      </AccommodationContainer>
    </PageBodyContainer>
  );
}

export default Accommodation;
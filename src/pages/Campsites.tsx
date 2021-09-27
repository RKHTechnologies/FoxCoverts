import React, { FC } from 'react';
import styled from 'styled-components';
import AccommodationItem from '../Components/AccommodationItem';
import { PageBodyContainer } from '../Shared/SharedStyles';
import Slider from 'infinite-react-carousel';
import CampsiteItem from '../Components/CampsiteItem';

const PageContainer = styled(PageBodyContainer)`
  background: #f1f1f1;
  padding: 40px 20px;
`;

const AccommodationContainer = styled.div`
  display: inline-flex;
  background: #F1F1F1;
  height: 100%;
  padding: 45px 20px;
  box-sizing: border-box;
  overflow-x: scroll;
`;

const settings =  {
  arrows: true,
  autoplay: false,
  autoplaySpeed: 6000,
  dots: true,
  duration: 300,
  slidesToShow: 5,
};

const Campsites: FC = () => {
  return (
    <PageContainer>

      <Slider {...settings}>
        <CampsiteItem title="Sapcote" pitchSize={"32m x 37m"} tap={51} wc={79} sleeps={0} description="Flag pole, Fire area, wood store near by"/>
        <CampsiteItem title="11th Hinckley" pitchSize={"31m x 41m"} tap={34} wc={129} sleeps={0} description="Flag pole, Fire area, wood store near by"/>
        <CampsiteItem title="12th Hinckley" pitchSize={"36m x 30m"} tap={5} wc={147} sleeps={0} description="Flag pole, Kitchen Shelter, Wood store near by, Fire area"/>
        <CampsiteItem title="4th Hinckley" pitchSize={"36m x 30m"} tap={18} wc={165} sleeps={0} description="Fire area, Wood store near by"/>
        <CampsiteItem title="Hammock Village" pitchSize={"30m x 30m"} tap={54} wc={201} sleeps={0} description="Fire area, Wood store near by"/>
        <CampsiteItem title="Stoney Stanton" pitchSize={"53m x 33m"} tap={18} wc={165} sleeps={0} description="Wood store near by, Fire Area, Sheltered Kitchen area"/>
        <CampsiteItem title="Barwell" pitchSize={"45m x 30m"} tap={101} wc={248} sleeps={0} description="Own car park accessible from the road to park 12-15 cars, Flag pole, fire area, wood store nearby"/>
        <CampsiteItem title="1st Hinckley" pitchSize={"40m x 31m"} tap={96} wc={142} sleeps={0} description="Fire area, wood store nearby"/>
        <CampsiteItem title="Earl Shilton" pitchSize={"40m x 45m"} tap={126} wc={172} sleeps={0} description="Fire area, wood store nearby, gateway can be opened up to Brittania site next door to provide a super site, next to main car park"/>
        <CampsiteItem title="Brittania" pitchSize={"48m x 38m"} tap={182} wc={238} sleeps={0} description="Gateway can be opened up to Earl shilton site next door to provide a super site, Fire Area, Wood store near by, next to main car park"/>
        <CampsiteItem title="2nd Hinckley" pitchSize={"20m x 45m"} tap={238} wc={294} sleeps={0} description="Fire area, wood store nearby, next to main car park"/>
        <CampsiteItem title="Stoke Golding" pitchSize={"41m x 26m"} tap={91} wc={134} sleeps={0} description="Fire area, wood store nearby, Flag pole"/>
      </Slider>
    </PageContainer>
  );
}

export default Campsites;
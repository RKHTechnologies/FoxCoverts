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
        <CampsiteItem title="11th Hinckley" pitchSize={"31m x 41m"} tap={34} wc={129} sleeps={0} description="The newly refurbished Bus Shelter has one large room which is ideal for use as an activity room, classroom, meeting venue or sleeping area.  It has a small kitchenette and is heated by electric wall heaters.  The price quoted is for building hire only and excludes campsite fees."/>
        <CampsiteItem title="12th Hinckley" pitchSize={"36m x 30m"} tap={5} wc={147} sleeps={0} description="The George Wilson Building is located in the main paddock area and makes an ideal daytime or sleepover base.  It has a main hall, kitchen and separate Leaders' room. The hall has benches and tables and will accommodate about fifty people.  Heating is provided by a wood-burning fire and electric wall and storage heaters.  The price quoted is for building hire only and excludes campsite fees. (Any persons sleeping overnight in building is charged as per campsite fees)"/>
        <CampsiteItem title="4th Hinckley" pitchSize={"36m x 30m"} tap={18} wc={165} sleeps={0} description="New for 2022! Fancy something different for your next pack or group residential? Why not stay aboard our Holiday Bus? A double deck bus converted into 17 bed accommodation (14 bunk beds in a dorm and a separate room with 3 beds). The bus comes complete with a downstairs seating area and outdoor kitchen area. "/>
        <CampsiteItem title="Hammock Village" pitchSize={"30m x 30m"} tap={54} wc={201} sleeps={0} description="test"/>
        <CampsiteItem title="Stoney Stanton" pitchSize={"53m x 33m"} tap={18} wc={165} sleeps={0} description="The village includes a 32 foot parachute covering a wood chip floor with a central fire. There is also a wooden tripod supporting it which doubles as a support to hang pans etc over the fire if needed. In addition to a small charge per night to use the facility, we also add an extra £1.25 per person to the camp fees to cover the hire of hammocks &amp; tarps for everyone staying there. We have 20 hammocks suitable for young people and 10 adult ones."/>
        <CampsiteItem title="Barwell" pitchSize={"45m x 30m"} tap={101} wc={248} sleeps={0} description="The newly refurbished Bus Shelter has one large room which is ideal for use as an activity room, classroom, meeting venue or sleeping area.  It has a small kitchenette and is heated by electric wall heaters.  The price quoted is for building hire only and excludes campsite fees."/>
        <CampsiteItem title="1st Hinckley" pitchSize={"40m x 31m"} tap={96} wc={142} sleeps={0} description="The George Wilson Building is located in the main paddock area and makes an ideal daytime or sleepover base.  It has a main hall, kitchen and separate Leaders' room. The hall has benches and tables and will accommodate about fifty people.  Heating is provided by a wood-burning fire and electric wall and storage heaters.  The price quoted is for building hire only and excludes campsite fees. (Any persons sleeping overnight in building is charged as per campsite fees)"/>
        <CampsiteItem title="Earl Shilton" pitchSize={"40m x 45m"} tap={126} wc={172} sleeps={0} description="New for 2022! Fancy something different for your next pack or group residential? Why not stay aboard our Holiday Bus? A double deck bus converted into 17 bed accommodation (14 bunk beds in a dorm and a separate room with 3 beds). The bus comes complete with a downstairs seating area and outdoor kitchen area. "/>
        <CampsiteItem title="Brittania" pitchSize={"48m x 38m"} tap={182} wc={238} sleeps={0} description="test"/>
        <CampsiteItem title="2nd Hinckley" pitchSize={"20m x 45m"} tap={238} wc={294} sleeps={0} description="test"/>
        <CampsiteItem title="Stoke Golding" pitchSize={"41m x 26m"} tap={91} wc={134} sleeps={0} description="test"/>
      </Slider>
    </PageContainer>
  );
}

export default Campsites;
import React, { FC } from 'react';
import styled from 'styled-components';
import AccommodationItem from '../Components/AccommodationItem';
import { PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import Slider from 'infinite-react-carousel';

// export const PageContainer = styled(PageBodyContainer)`
  
//   padding: 20px 20px;
//   position: absolute;
//   top: 100px;
//   right: 0;
//   left: 0;
//   bottom: 0;
  
//   @media(max-width: ${SharedSettings.mobile}) {
//     padding: 10px;
//   }
// `;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #ebebeb;
  padding: 20px 0 40px;
  min-height: calc(100% - 60px);
`;

const settings =  {
  arrows: true,
  autoplay: false,
  autoplaySpeed: 6000,
  dots: true,
  duration: 300,
  slidesToShow: 5,
};

const Accommodation: FC = () => {
  return (
    <PageBodyContainer>

      <FlexContainer>
        {/* <AccommodationItem title="Hammock Village" image={"hammock_village"} pitchSize={200} tap={20} wc={15} sleeps={35} description="The village includes a 32 foot parachute covering a wood chip floor with a central fire. There is also a wooden tripod supporting it which doubles as a support to hang pans etc over the fire if needed. In addition to a small charge per night to use the facility, we also add an extra £1.25 per person to the camp fees to cover the hire of hammocks &amp; tarps for everyone staying there. We have 20 hammocks suitable for young people and 10 adult ones."/> */}
        <AccommodationItem title="George Wilson Building" image={"george_wilson"} pitchSize={210} tap={18} wc={15} sleeps={35} description="The George Wilson Building is located in the main paddock area and makes an ideal daytime or sleepover base.  It has a main hall, kitchen and separate Leaders' room. The hall has benches and tables and will accommodate about fifty people.  Heating is provided by a wood-burning fire and electric wall and storage heaters.  The price quoted is for building hire only and excludes campsite fees. (Any persons sleeping overnight in building is charged as per campsite fees)"/>
        {/* <AccommodationItem title="Holiday Bus" image={"holiday_bus"} pitchSize={180} tap={20} wc={2} sleeps={17} description="New for 2022! Fancy something different for your next pack or group residential? Why not stay aboard our Holiday Bus? A double deck bus converted into 17 bed accommodation (14 bunk beds in a dorm and a separate room with 3 beds). The bus comes complete with a downstairs seating area and outdoor kitchen area. "/> */}
      </FlexContainer>

      {/* 
      <Slider {...settings}>
        <AccommodationItem title="Hammock Village" image={"hammock_village"} pitchSize={200} tap={20} wc={15} sleeps={35} description="The village includes a 32 foot parachute covering a wood chip floor with a central fire. There is also a wooden tripod supporting it which doubles as a support to hang pans etc over the fire if needed. In addition to a small charge per night to use the facility, we also add an extra £1.25 per person to the camp fees to cover the hire of hammocks &amp; tarps for everyone staying there. We have 20 hammocks suitable for young people and 10 adult ones."/>
        <AccommodationItem title="George Wilson Building" image={"george_wilson"} pitchSize={210} tap={18} wc={15} sleeps={35} description="The George Wilson Building is located in the main paddock area and makes an ideal daytime or sleepover base.  It has a main hall, kitchen and separate Leaders' room. The hall has benches and tables and will accommodate about fifty people.  Heating is provided by a wood-burning fire and electric wall and storage heaters.  The price quoted is for building hire only and excludes campsite fees. (Any persons sleeping overnight in building is charged as per campsite fees)"/>
        <AccommodationItem title="Holiday Bus" image={"holiday_bus"} pitchSize={180} tap={20} wc={2} sleeps={17} description="New for 2022! Fancy something different for your next pack or group residential? Why not stay aboard our Holiday Bus? A double deck bus converted into 17 bed accommodation (14 bunk beds in a dorm and a separate room with 3 beds). The bus comes complete with a downstairs seating area and outdoor kitchen area. "/>
      </Slider> */}

      {/* <AccommodationItem title="The Bus Shelter" image={"fc3"} pitchSize={345} tap={50} wc={15} sleeps={35} description="The newly refurbished Bus Shelter has one large room which is ideal for use as an activity room, classroom, meeting venue or sleeping area.  It has a small kitchenette and is heated by electric wall heaters.  The price quoted is for building hire only and excludes campsite fees."/>  //Been Asked to remove this */}


      {/* <AccommodationContainer> 
        
        <AccommodationItem title="Hammock Village" pitchSize={200} tap={20} wc={15} sleeps={35} description="The village includes a 32 foot parachute covering a wood chip floor with a central fire. There is also a wooden tripod supporting it which doubles as a support to hang pans etc over the fire if needed. In addition to a small charge per night to use the facility, we also add an extra £1.25 per person to the camp fees to cover the hire of hammocks &amp; tarps for everyone staying there. We have 20 hammocks suitable for young people and 10 adult ones."/>
        <AccommodationItem title="The Bus Shelter" pitchSize={345} tap={50} wc={15} sleeps={35} description="The newly refurbished Bus Shelter has one large room which is ideal for use as an activity room, classroom, meeting venue or sleeping area.  It has a small kitchenette and is heated by electric wall heaters.  The price quoted is for building hire only and excludes campsite fees."/>
        <AccommodationItem title="George Wilson Building" pitchSize={210} tap={18} wc={15} sleeps={35} description="The George Wilson Building is located in the main paddock area and makes an ideal daytime or sleepover base.  It has a main hall, kitchen and separate Leaders' room. The hall has benches and tables and will accommodate about fifty people.  Heating is provided by a wood-burning fire and electric wall and storage heaters.  The price quoted is for building hire only and excludes campsite fees. (Any persons sleeping overnight in building is charged as per campsite fees)"/>
        <AccommodationItem title="Holiday Bus" pitchSize={180} tap={20} wc={32} sleeps={35} description="New for 2022! Fancy something different for your next pack or group residential? Why not stay aboard our Holiday Bus? A double deck bus converted into 17 bed accommodation (14 bunk beds in a dorm and a separate room with 3 beds). The bus comes complete with a downstairs seating area and outdoor kitchen area. "/>
        <AccommodationItem title="1st Britannia Campsite" pitchSize={300} tap={20} wc={18} sleeps={35} description="test"/>
        <AccommodationItem title="1st Britannia Campsite" pitchSize={300} tap={20} wc={18} sleeps={35} description="test"/>
        
      </AccommodationContainer> */}
    </PageBodyContainer>
  );
}

export default Accommodation;
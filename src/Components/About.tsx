import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';

const Container = styled.div`
    font-weight: 400;
    margin: auto;    
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 250px;
    grid-gap: 50px;
    grid-template-areas: 'text text bookings';

    @media(max-width: ${SharedSettings.mobile}) {
        grid-template-columns: 1fr;
        grid-template-areas: 
            'text'
            'bookings'; 
        margin-top: 0;
    }
`;

const Text = styled.div`
    grid-area: text;
    font-weight: 400;
    font-size: 1.4em;

    @media(max-width: ${SharedSettings.mobile}) { font-size: 1em; }
`;

const BookingsCard = styled.div`
    grid-area: bookings;
    width: 100%;
    height: 350px;
    background: #F6F6F6;
    border-radius: 5px;
    padding: 18px 28px;
    box-sizing: border-box;
    font-weight: 400;

    div {
        color: ${colours.Teal};
        font-size: 1.6em;
        font-weight: 800;
        margin-bottom: 4px;
    }

    @media(max-width: ${SharedSettings.mobile}) { 
        height: auto;
    }
`;

const SecondaryButton = styled.button`
    width: 100%;
    margin-top: 14px;
    background: transparent;
    border: 2px solid ${colours.Teal};
    color: ${colours.Teal};
    height: 36px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1em;

    &:hover {
        background: ${colours.Teal};
        color: #F6F6F6;
        cursor: pointer;
    }
`;

const handleClick = () => {
    window.open("https://www.scouts.org.uk/coronavirus/", "_blank");
}


const About: FC = () => {
  return (
    <Container>
        <Text>
            Hinckley District Scouts' campsite at Fox Coverts has provided camping opportunities for young people since 1956.  We are located between the villages of Kirkby Mallory and Newbold Verdon in the East Midlands county of Leicestershire but also close to good road links.  Covering nearly 16 acres of woodland, there are campsite areas to suit both group camps and patrol camps including secluded sites in wooded glades which are ideal for backwoods camping and constructing bivouacs.
            <br /><br />
            Fox Coverts provides a number of activities suitable for all age groups and there are additional off-site activities available nearby.  The site also makes an good base for hiking activities and has several public footpaths near the campsite.
            <br /><br />
            We welcome bookings from Scout and Guide groups, schools, Duke of Edinburgh and other recognised youth groups.
        </Text>
        <BookingsCard>
            <div>Coronavirus</div>
            The Government has confirmed that the youth sector is an essential service and therefore Scouts are able to continue to meet in a COVID-safe way independent of social gathering restrictions where they follow Scouts guidance.
            <SecondaryButton onClick={handleClick}>More Info</SecondaryButton>
        </BookingsCard>
  </Container>
  );
}

export default About;
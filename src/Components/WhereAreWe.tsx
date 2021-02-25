import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Map = styled.iframe`
  width: 100%;
  border: 0;
  margin: 0;
  width: 100%;
  margin-bottom: -5px;
`;

const TextOverlay = styled.div`
  position: absolute;
  left: 10px;
  top: -54px;
  /* width: calc(100% - 330px); */
  font-size: 2.5em;
  font-weight: 100;
  color: white;
  background: ${colours.Teal};
  padding: 2px 10px;
  border-radius: 5px;

  /* @media(max-width: 500px) {
    left: 240px;
    top: 5px;
    width: calc(100% - 250px);
  } */
`;

const WhereAreWe: FC = () => {
  return (
    <Container>
      <TextOverlay>Where are we?</TextOverlay>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19381.105965316554!2d-1.350736362395263!3d52.612309437136304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877597fa957cc83%3A0xa5a22afc6ad9ff4e!2sFox%20Coverts%20Scout%20Campsite!5e0!3m2!1sen!2suk!4v1614291047209!5m2!1sen!2suk" width="600" height="500" loading="lazy"></Map>
    </Container>
  );
}

export default WhereAreWe;
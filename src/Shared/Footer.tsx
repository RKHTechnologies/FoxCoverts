import React, { FC } from 'react';
import styled from 'styled-components';
import { SharedSettings } from '../Shared/SharedStyles';
import { ImagesDesktop } from '../Shared/ImageLib';

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  background: #D4D4D4;
  color: #707070;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div, p {
    font-weight: 400;
  }

  div:before {
    content: '';
    position: absolute;
    margin-left: -48px;
    margin-top: -10px;
    width: 40px;
    height: 40px;
    background: url(${ImagesDesktop['rkh']});
    background-size: cover;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    flex-direction: column;
    padding-bottom: 15px;
    text-align: center;
    height: 100px;

    div { margin-left: 36px; }
  }
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <p>Copyright © Fox Coverts Scout Campsite. All rights reserved.</p>
      <div>Site built by RKH Technologies</div>
    </FooterContainer>
  );
}

export default Footer;
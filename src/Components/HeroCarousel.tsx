import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop, ImagesMobile } from '../Shared/ImageLib';
import { useMediaQuery } from 'react-responsive';
import Slider from 'infinite-react-carousel';
import { colours } from '../Shared/SharedStyles';

interface HeroProps {
    small?: boolean;
}

const Container = styled.div`
    width: 100%;
    height: ${(p: HeroProps):string => p.small ? "65%" : "80%"};
    text-align: center;
    background: #a0a0a0;
    position: relative;

    @media(max-width: 700px) {
        height: 300px;
    }

    ul.carousel-dots {
      position: absolute;
      margin-top: -50px;
      z-index: 2;

      li button:before {  
        color: #fff;
      }
    }
`;

const Slide = styled.div`
  height: calc(80vh - 80px);

  @media(max-width: 700px) {
    height: 300px;
  }
`;

interface ImageProps {
  imageUrl: string;
  imageHeight?: string;
}

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(p: ImageProps):string => p.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: ${(p: ImageProps):string => p.imageHeight ?? "center"};
  background-position-x: center;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(0 0 0 / 0.2);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  color: ${colours.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    text-transform: uppercase;
    font-weight: 100;
    font-size: 2.2em;

    @media(max-width: 1100px) {
      font-size: 3vw;
    }
    @media(max-width: 500px) {
      font-size: 5vw;
    }
  }

  div {
    font-size: 6em;
    line-height: 100px;
    margin-top: 15px;

    @media(max-width: 1100px) {
      font-size: 8vw;
    }
    @media(max-width: 500px) {
      font-size: 12vw;
      line-height: 60px;
      margin-top: 5px;
    }
  }
`;


interface IProps {
    small?: boolean;
}

const Hero: FC<IProps> = ({small}: IProps) => {
    const mobile = useMediaQuery({query: '(max-width: 700px)'});
    
    const settings =  {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: true,
      duration: 300,
    };

    return (
      <Container small={small}>
        
        <Slider {...settings}>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["fc5"] : ImagesDesktop["fc5"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["fc1"] : ImagesDesktop["fc1"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["fc2"] : ImagesDesktop["fc2"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["fc3"] : ImagesDesktop["fc3"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["fc4"] : ImagesDesktop["fc4"]} />
          </Slide>
        </Slider>

        <Overlay>
          <span>Welcome To</span>
          <div>Fox Coverts <br />Scout Campsite</div>
        </Overlay>
      </Container>
    );
}

export default Hero;
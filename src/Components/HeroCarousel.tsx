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
  background: rgb(0 0 0 / 0.33);
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
  }

  div {
    font-size: 6em;
    line-height: 100px;
    margin-top: 15px;
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
            <Image imageUrl={mobile ? ImagesMobile["exampleCampsite"] : ImagesDesktop["exampleCampsite"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["scoutsHero"] : ImagesDesktop["scoutsHero"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["highRopesHero"] : ImagesDesktop["highRopesHero"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["expeditionHero"] : ImagesDesktop["expeditionHero"]} />
          </Slide>
          <Slide>
            <Image imageUrl={mobile ? ImagesMobile["kayakingHero"] : ImagesDesktop["kayakingHero"]} />
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
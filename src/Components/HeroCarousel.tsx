import React, { FC } from 'react';
import styled from 'styled-components';
import { imageLib, ImagesDesktop, ImagesMobile } from '../Shared/ImageLib';
import { useMediaQuery } from 'react-responsive';
import Slider from 'infinite-react-carousel';

interface HeroProps {
    small?: boolean;
}

const Container = styled.div`
    width: 100%;
    height: ${(p: HeroProps):string => p.small ? "65%" : "80%"};
    text-align: center;
    background: #a0a0a0;

    @media(max-width: 700px) {
        height: 300px;
    }
`;

interface ImageProps {
  imageUrl: string;
  imageHeight?: string;
}

const Image = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${(p: ImageProps):string => p.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: ${(p: ImageProps):string => p.imageHeight ?? "center"};
  background-position-x: center;
`;


interface IProps {
    small?: boolean;
}

const Hero: FC<IProps> = ({small}: IProps) => {
    const mobile = useMediaQuery({query: '(max-width: 700px)'});
    
    const settings =  {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      centerMode: true,
      centerPadding: 30,
      dots: true,
      duration: 300,
    };

    return (
      <Container small={small}>
        
        <Slider {...settings}>
          <div>
            <Image imageUrl={"beaversHero"} />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </Container>
    );
}

export default Hero;
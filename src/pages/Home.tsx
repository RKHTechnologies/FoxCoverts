import React, { FC } from 'react';
import HeroCarousel from '../Components/HeroCarousel';
import { PageBodyContainer } from '../Shared/SharedStyles';

const Home: FC = () => {
  return (
    <PageBodyContainer>
      <HeroCarousel />
    </PageBodyContainer>
  );
}

export default Home;
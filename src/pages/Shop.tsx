import React, { FC } from 'react';
import styled from 'styled-components';
import ShopItem from '../Components/ShopItem';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';

const ShopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
`;


const Shop: FC = () => {
  return (
    <PageBodyContainer>
      <ShopContainer>
        <ShopItem name="Beaver Scouts Reflective Soft Shell Jacket - Kids" price="28" image="test" />
        <ShopItem name="Stay Wild double wall insulated water bottle 500ml" price="15" image="test" />
        <ShopItem name="Garden Games - Limbo" price="25" image="test" />
      </ShopContainer>
    </PageBodyContainer>
  );
}

export default Shop;
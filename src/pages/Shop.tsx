import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';

const ShopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
`;

const ShopItem = styled.div`
  width: 200px;
  height: 240px;
  border-radius: 8px;
  background: ${colours.light};
  box-shadow: 3px 5px 9px #c3c3c3;
`;



const Shop: FC = () => {
  return (
    <PageBodyContainer>
      <ShopContainer>
        <ShopItem>

        </ShopItem>
      </ShopContainer>
    </PageBodyContainer>
  );
}

export default Shop;
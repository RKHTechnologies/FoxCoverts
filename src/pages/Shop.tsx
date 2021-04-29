import React, { FC } from 'react';
import styled from 'styled-components';
import ShopItem from '../Components/ShopItem';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';
import firebase from '../util/firebase';

const ShopContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f1f1;
`;


const Shop: FC = () => {
  const handleClick = () => {
    createShopItem();
  };

  const createShopItem = () => {
    const itemName = "Beavers Jumper Small";
  
    const ref = firebase.database().ref("newItem");
    const newItem = {
      name: "Beaver new thing",
      price: "25",
      image: "test",
    }
  
    ref.push(newItem);
  };




  return (
    <PageBodyContainer>
      <ShopContainer>
        <ShopItem name="Beaver Scouts Reflective Soft Shell Jacket - Kids" price="28" image="test" />
        <ShopItem name="Stay Wild double wall insulated water bottle 500ml" price="15" image="test" />
        <ShopItem name="Garden Games - Limbo" price="25" image="test" />
        <div onClick={handleClick}>test</div>
      </ShopContainer>
    </PageBodyContainer>
  );
}

export default Shop;
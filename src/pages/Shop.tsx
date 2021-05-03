import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import ShopItem from '../Components/ShopItem';
import { PageBodyContainer } from '../Shared/SharedStyles';
import firebase from '../util/firebase';
import { databaseRead } from '../util/functions';

interface IPageItem {
  name: string;
  price: string;
  image: string;
}

const ShopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  background: #f1f1f1;
`;

const Shop: FC = () => {
  const [itemList, setItemList] = useState<Array<IPageItem>>();
  
  // Read
  useEffect(() => {
    const shopItems = firebase.database().ref("newItem");
    shopItems.on("value", (snapshot: any) => {
      const items = snapshot.val();
      const listArray = [];
      for (let id in items) {
        listArray.push(items[id]);
      }
      setItemList(listArray);
    });
  }, []);


  // Create
  const createShopItem = () => { 
    const ref = firebase.database().ref("newItem");
    const newItem = {
      name: "New Shop Item",
      price: "100",
      image: "test",
    }
  
    ref.push(newItem);
  };

  return (
    <PageBodyContainer>
      <ShopContainer>
        {itemList ? itemList.map((item) => (
          <ShopItem name={item.name} price={item.price} image={item.image} />
        )) : ""}
        <div onClick={createShopItem}>Add new item</div>
      </ShopContainer>
    </PageBodyContainer>
  );
}

export default Shop;
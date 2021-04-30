import { FC, useEffect } from 'react';
import styled from 'styled-components';
import ShopItem from '../Components/ShopItem';
import { PageBodyContainer } from '../Shared/SharedStyles';
import firebase from '../util/firebase';

interface IPageItem {
  name: string;
  price: string;
  image: string;
}

let pageItems: Array<IPageItem> = [];

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
    const ref = firebase.database().ref("newItem");
    const newItem = {
      name: "Beaver new thing",
      price: "25",
      image: "test",
    }
  
    ref.push(newItem);
  };

  // Read
  useEffect(() => {
    const shopItems = firebase.database().ref("newItem");
    shopItems.on("value", (snapshot: any) => {
      console.log(snapshot.val());
      
      for (const item in snapshot.val()) {
        debugger;
        console.log(item);
        // pageItems.push(item);
      }
    });
  }, []);

  const shopPageItems = () => {
    debugger;
    console.log("page items:", pageItems);

    // pageItems.forEach(item => console.log(item));

    for (const testprop in pageItems) {
      console.log("testprop:", testprop);
    }


  }

  return (
    <PageBodyContainer>
      <ShopContainer>
        {pageItems.forEach(item => console.log("test"))}

             {/* // <ShopItem name={item.name} price={item.price} image={item.image} />
          
          // console.log(`Name: ${item.name}, Price: ${item.price}, Image: ${item.image}`) */}
        {/* <ShopItem name="Beaver Scouts Reflective Soft Shell Jacket - Kids" price="28" image="test" />
        <ShopItem name="Stay Wild double wall insulated water bottle 500ml" price="15" image="test" />
        <ShopItem name="Garden Games - Limbo" price="25" image="test" /> */}
        <div onClick={shopPageItems}>test</div>
      </ShopContainer>
    </PageBodyContainer>
  );
}

export default Shop;
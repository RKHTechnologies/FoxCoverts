import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 240px;
  height: 300px;
  border-radius: 8px;
  background: ${colours.light};
  box-shadow: 3px 5px 9px #c3c3c3;
  margin: 20px 10px 20px 20px;
`;

const Image = styled.div`
  width: 96%;
  height: 214px;
  background: #c3c3c3;
  margin: 6px auto 0;
  border-radius: 5px;
`;

const Name = styled.div`
  margin: 2px 5px;
  font-weight: 400;
  height: 66px;
`;

const Price = styled.div`
  margin: 0 5px;
  text-align: right;
  font-weight: 400;
  font-size: 24px;
  margin-top: -22px;
`;

interface IProps {
  image: string;
  name: string;
  price: string;
}

const ShopItem: FC<IProps> = ({image, name, price}: IProps) => {
  return (
    <Container>
      <Image />
      <Name>{name}</Name>
      <Price>£{price}</Price>
    </Container>
  );
}

export default ShopItem;
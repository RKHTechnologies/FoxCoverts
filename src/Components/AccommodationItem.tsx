import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 700px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px 1px #19191914;
`;

const Image = styled.div`
  height: 240px;
  background: #e0e0e0;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.8em;
`;

const Description = styled.div`

`;


interface IProps {
  title: string;
}

const AccommodationItem: FC<IProps> = ({ title }: IProps) => {
  return (
    <Container>
      <Image />
      <Title>{title}</Title>
      
    </Container>
  );
}

export default AccommodationItem;
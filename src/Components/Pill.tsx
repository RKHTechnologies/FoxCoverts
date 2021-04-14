import React, { FC } from 'react';
import styled from 'styled-components';
import { Colour, colours } from '../Shared/SharedStyles';

interface IColourProps {
  colour: Colour;
} 

const Container = styled.div`
  width: 260px;
  height: 40px;
  background: ${(p: IColourProps) => colours[p.colour]}4c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Subject = styled.div`
  background: ${(p: IColourProps) => colours[p.colour]}4c;
  height: 40px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 120px);
`;


interface IProps {
  colour: Colour;
}

const Pill: FC<IProps> = ({colour}: IProps) => {
  return (
    <Container colour={colour}>
      <Subject colour={colour}>Suitable for</Subject>
      <Value>All age groups</Value>
    </Container>
  );
}

export default Pill;
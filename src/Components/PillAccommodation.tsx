import { FC } from 'react';
import styled from 'styled-components';
import { Colour, colours } from '../Shared/SharedStyles';

interface IColourProps {
  colour: Colour;
} 

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const Subject = styled.div`
  background: ${(p: IColourProps) => colours[p.colour]};
  color: ${colours.light};
  padding: 9px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p: IColourProps) => colours[p.colour]}4c;
  padding: 9px 14px;
  font-weight: 600;
`;


interface IProps {
  colour: Colour;
  subject: string;
  value: string;
}

const Pill: FC<IProps> = ({colour, subject, value}: IProps) => {
  return (
    <Container>
      <Subject colour={colour}>{subject}</Subject>
      <Value colour={colour}>{value}</Value>
    </Container>
  );
}

export default Pill;
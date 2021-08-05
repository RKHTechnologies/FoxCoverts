import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExpandArrowsAlt, faFaucet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  overflow: hidden;
  border-radius: 5px;
`;

const Subject = styled.div`
  background: ${(p: IColourProps) => colours[p.colour]};
  color: ${colours.light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  height: 40px;
  width: 50px;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p: IColourProps) => colours[p.colour]}4c;
  font-weight: 600;
  height: 40px;
  width: calc(100% - 50px);
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colours.light};
`;


interface IProps {
  colour: Colour;
  subject: string;
  value: string;
  icon: IconProp;
}

const Pill: FC<IProps> = ({colour, subject, value, icon}: IProps) => {
  return (
    <Container>
      {/* <Subject colour={colour}>{subject}</Subject> */}
      <Subject colour={colour}><Icon icon={icon}/></Subject>
      <Value colour={colour}>{value}</Value>
    </Container>
  );
}

export default Pill;
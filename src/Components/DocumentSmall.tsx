import React, { Children, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colours, Colour, SharedSettings } from '../Shared/SharedStyles';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const DocumentContainer = styled.a`
  width: 285px;
  background: #eaeaea;
  box-sizing: border-box;
  text-decoration: none;
  color: ${colours.dark};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-areas: 'icon name';

  &:hover {
    background: #c9c9c9;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    width: 96%;
  }
`;

interface IconProps {
  accent: Colour;
}

const PDFIcon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 40px;
  padding: 12px 8px;
  color: ${(p: IconProps) => colours[p.accent]};
`;

const Name = styled.div`
  grid-area: name;
  font-size: 1.6em;
  font-weight: 400;
  margin-left: -1px;
  display: flex;
  align-items: center;
`;


interface IProps {
  name: string;
  filename: string;
  accent: Colour;
}

const DocumentSmall: FC<IProps> = ({ name, filename, accent, children }: IProps | any) => {
  return (
    <DocumentContainer href={require(`../documents/${filename}`).default} target="_blank" rel="noreferrer noopener">
      <PDFIcon icon={faFileAlt} size="4x" accent={accent} />
      <Name>{name}</Name>
      {children}
    </DocumentContainer>
  );
}

export default DocumentSmall;
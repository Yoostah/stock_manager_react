import React, { HTMLAttributes, memo } from 'react';

import { Container } from './style';

type HTMLDivElement = HTMLAttributes<HTMLDivElement>;
const InfoCards: React.FC<HTMLDivElement> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(InfoCards);

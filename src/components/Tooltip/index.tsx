import React from 'react';

import { Container } from './styles';

type TTooltip = {
  title: string;
  className?: string;
};

const Tooltip: React.FC<TTooltip> = ({ children, className = '', title }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;

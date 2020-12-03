import React, { useState, HTMLAttributes } from 'react';

import { CardContainer } from './style';

interface ICard extends HTMLAttributes<HTMLDivElement> {
  value: string;
  filterProducts: (filter: string) => void;
}

const Card: React.FC<ICard> = ({ filterProducts, value, children }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleFilter() {
    filterProducts(value);
    setIsSelected(!isSelected);
  }

  return (
    <CardContainer isSelected={isSelected} onClick={handleFilter}>
      {children}
    </CardContainer>
  );
};

export default Card;

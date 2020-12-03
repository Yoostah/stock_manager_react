import React, { useState, HTMLAttributes } from 'react';
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi';

import { CardContainer } from './style';

interface ICard extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  filterProducts?: (filter: string) => void;
}

const Card: React.FC<ICard> = ({ filterProducts, value, children }) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleFilter() {
    if (value && filterProducts) {
      filterProducts(value);
      setIsSelected(!isSelected);
    }
  }

  return (
    <CardContainer isSelected={isSelected} onClick={handleFilter}>
      {children}
      {value &&
        (isSelected ? (
          <FiArrowUpCircle size={20} />
        ) : (
          <FiArrowDownCircle size={20} />
        ))}
    </CardContainer>
  );
};

export default Card;

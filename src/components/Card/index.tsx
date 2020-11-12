import React, { useState, useCallback } from "react";

import { CardContainer } from "./style";

// interface CardProps extends HTMLAttributes<HTMLDivElement> {
//   isSelected?: Boolean;
// }
const Card: React.FC = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedCard = useCallback(() => {
    setIsSelected(!isSelected);
  }, [isSelected]);

  return (
    <CardContainer
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      {children}
    </CardContainer>
  );
};

export default Card;

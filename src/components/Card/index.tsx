import React, { useState } from "react";

import { CardContainer } from "./style";

const Card: React.FC = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

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

import React, { memo } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import Card from "../Card";
import { Container } from "./style";

const InfoCards: React.FC = () => {
  return (
    <Container>
      <Card>
        <div>
          <p>Produtos</p>
          <strong>R$17.400,00</strong>
        </div>
        <FiArrowUpCircle size={20} />
      </Card>
      <Card>
        <div>
          <p>Produtos</p>
          <strong>R$17.400,00</strong>
        </div>
        <FiArrowUpCircle size={20} />
      </Card>
      <Card>
        <div>
          <p>Produtos</p>
          <strong>R$17.400,00</strong>
        </div>
        <FiArrowUpCircle size={20} />
      </Card>
    </Container>
  );
};

export default memo(InfoCards);

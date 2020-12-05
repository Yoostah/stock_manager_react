import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Container, DeliveryItem, ItemsContainer } from './style';

interface IDelivery {
  delivery: {
    id: number;
    description: string;
    delivery_at: string;
    items: IDeliveryItem[];
    status: {
      name: string;
    };
  };
}

interface IDeliveryItem {
  id: number;
  name: string;
  pivot: {
    amount: number;
  };
}
const DeliveryInfo: React.FC<IDelivery> = ({ delivery }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  function handleCollapse() {
    setCollapsed(!isCollapsed);
  }
  return (
    <Container isCollapsed={isCollapsed} onClick={handleCollapse}>
      <section key={delivery.id}>
        <div>{delivery.description}</div>
        <div>{delivery.delivery_at}</div>
        <div
          className={`deliveryStatus status_${delivery.status.name.toLocaleLowerCase()}`}
        >
          {delivery.status.name}
        </div>

        <button type="button">
          {isCollapsed ? (
            <FiChevronDown size={20} />
          ) : (
            <FiChevronUp size={20} />
          )}
        </button>
      </section>
      <ItemsContainer isCollapsed={isCollapsed}>
        {delivery.items &&
          delivery.items.map((item) => {
            const { amount } = item.pivot;
            return (
              <DeliveryItem key={item.id}>
                <span>
                  <strong>Item: </strong>
                  {item.name}
                </span>
                <p>
                  <strong>Quantidade: </strong>
                  {amount}
                </p>
              </DeliveryItem>
            );
          })}
      </ItemsContainer>
    </Container>
  );
};

export default DeliveryInfo;

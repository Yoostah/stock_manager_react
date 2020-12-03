import React, { useEffect, useState, useCallback } from 'react';

import { Container } from './style';
import api from '../../services';

interface IDeliveries {
  id: number;
  description: string;
  delivery_at: string;
  status_id: number;
  items: IProducts[];
}

interface IProducts {
  id: number;
  name: string;
  code?: number;
  pivot: {
    amount: number;
  };
}

const Delivery: React.FC = () => {
  const [deliveries, setDeliveries] = useState<IDeliveries[]>(
    [] as IDeliveries[]
  );

  const fetchDeliveries = useCallback(async () => {
    const { data } = await api.get('/delivery');
    setDeliveries(data);
  }, []);

  useEffect(() => {
    fetchDeliveries();
  }, [fetchDeliveries]);

  return (
    <>
      {/* <div>
        <InfoCards />
      </div> */}
      {deliveries &&
        deliveries.map((delivery) => {
          return (
            <div key={delivery.id}>
              <p>{delivery.description}</p>
              <strong>{`Entregue em: ${delivery.delivery_at}`}</strong>
              {delivery.items &&
                delivery.items.map((item) => {
                  const { amount } = item.pivot;
                  return (
                    <div>
                      <h3 key={item.id}>{item.name}</h3>
                      <strong>{amount}</strong>
                    </div>
                  );
                })}
            </div>
          );
        })}
      <Container>
        <p>Entregas</p>
      </Container>
    </>
  );
};

export default Delivery;

import React, { useEffect, useState, useCallback } from 'react';

import { Container, Header, DeliveryContent } from './style';
import DeliveryInfo from '../../components/DeliveryInfo';
import api from '../../services';

interface IDeliveries {
  id: number;
  description: string;
  delivery_at: string;
  status: {
    name: string;
  };
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
    <Container>
      <DeliveryContent>
        <Header>
          <div>Nome</div>
          <div>Data</div>
          <div>Status</div>
          <div>Detalhes</div>
        </Header>

        {deliveries &&
          deliveries.map((delivery) => {
            return <DeliveryInfo key={delivery.id} delivery={delivery} />;
          })}
      </DeliveryContent>
    </Container>
  );
};

export default Delivery;

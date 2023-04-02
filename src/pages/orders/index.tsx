import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { IOrders } from 'types';
import { OrderTable, Title } from 'components';

export const Orders = () => {
  const orders = useLoaderData() as IOrders[];
  const [allOrders, setAllOrders] = useState<IOrders[]>(orders || []);
  return (
    <>
      <Title count={allOrders.length} />

      <OrderTable orders={allOrders} setOrders={setAllOrders} />
    </>
  );
};

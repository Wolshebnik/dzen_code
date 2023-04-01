import { useLoaderData } from 'react-router-dom';

import { IOrders } from 'types';
import { OrderTable, Title } from 'components';

export const Orders = () => {
  const orders = useLoaderData() as IOrders[];
  return (
    <>
      <Title />

      <OrderTable orders={orders} />
    </>
  );
};

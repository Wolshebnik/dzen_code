import { OrderTable, Title } from 'components';

import { orders } from 'mock';

export const Orders = () => {
  return (
    <>
      <Title />

      <OrderTable orders={orders} />
    </>
  );
};

import * as Icon from 'assets';
import { IOrders } from 'mock/types';
import { MouseEvent } from 'react';

import * as Styles from './styles';

export const OrderTable = ({ orders }: { orders: IOrders[] }) => {
  const handleElement = (id: number) => {
    // eslint-disable-next-line no-console
    console.log({ id });
  };

  const handleDelete = (event: MouseEvent<HTMLSpanElement>, id: number) => {
    event.stopPropagation();
    // eslint-disable-next-line no-console
    console.log(id);
  };

  return (
    <Styles.Block>
      {orders.map((order) => (
        <Styles.Element key={order.id} onClick={() => handleElement(order.id)}>
          <Styles.Description>{order.description}</Styles.Description>

          <Styles.BurgerBlock>
            <Icon.Burger />
          </Styles.BurgerBlock>

          <Styles.CountProducts>
            <Styles.Count>{order.products.length}</Styles.Count>
            <span>Продукта</span>
          </Styles.CountProducts>

          <Styles.DateBlock>{order.date}</Styles.DateBlock>

          <Styles.MoneyBlock>25 000.00 uah</Styles.MoneyBlock>

          <Styles.DeleteBlock onClick={(e) => handleDelete(e, order.id)}>
            <Icon.Delete />
          </Styles.DeleteBlock>
        </Styles.Element>
      ))}
    </Styles.Block>
  );
};

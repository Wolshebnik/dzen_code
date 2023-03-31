import { MouseEvent, useState } from 'react';

import * as Icon from 'assets';
import { Popup } from 'components';
import { IOrders } from 'mock/types';

import * as Styles from './styles';

export const OrderTable = ({ orders }: { orders: IOrders[] }) => {
  const [isOpen, onClose] = useState(false);

  const handleElement = (id: number) => {
    // eslint-disable-next-line no-console
    console.log({ id });
  };

  // eslint-disable-next-line no-console
  console.log('pop', isOpen);

  const handleDelete = (event: MouseEvent<HTMLSpanElement>, id: number) => {
    event.stopPropagation();
    // eslint-disable-next-line no-console
    console.log(id);
    onClose(true);
  };

  return (
    <Styles.Block>
      <Popup isOpen={isOpen} onClose={() => onClose(false)}>
        <div style={{ width: 300, height: 300, background: 'white' }}>
          <h2>Popup Content</h2>
          <p>
            This is an example of a React popup with overlay, TypeScript and
            animation!
          </p>
        </div>
      </Popup>

      {orders.map((order) => (
        <Styles.Element key={order.id} onClick={() => handleElement(order.id)}>
          <Styles.Description>{order.description}</Styles.Description>

          <Styles.BurgerBlock>
            <Icon.Burger />
          </Styles.BurgerBlock>

          <Styles.CountProducts>
            <Styles.Count>{order.products?.length}</Styles.Count>
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

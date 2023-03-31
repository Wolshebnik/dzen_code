import { MouseEvent } from 'react';

import * as Icon from 'assets';
import { IOrders } from 'mock/types';
import { usePopupDelay } from 'hook/delay';
import { Popup, WindowDelete } from 'components';

import * as Styles from './styles';

const delay = 300;

export const OrderTable = ({ orders }: { orders: IOrders[] }) => {
  const { isDelay, onClose, isOpen, setIsOpen } = usePopupDelay(delay);

  const handleElement = (id: number) => {
    // eslint-disable-next-line no-console
    console.log({ id });
  };

  const handleDelete = (event: MouseEvent<HTMLSpanElement>, id: number) => {
    event.stopPropagation();
    // eslint-disable-next-line no-console
    console.log(id);
    setIsOpen(true);
  };

  return (
    <Styles.Block>
      <Popup delay={delay} isOpen={isOpen} onClose={onClose} isDelay={isDelay}>
        <WindowDelete
          onClose={onClose}
          // eslint-disable-next-line no-console
          onClick={() => console.log('close')}
        />
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

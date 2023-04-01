import * as Icon from 'assets';
import { IOrders } from 'mock/types';
import { usePopupDelay } from 'hook/delay';
import { ModalProduct, Popup, WindowDelete } from 'components';

import * as Styles from './styles';

const duration = 300;

export const OrderTable = ({ orders }: { orders: IOrders[] }) => {
  const { isDuration, onClose, isOpen, setIsOpen } = usePopupDelay(duration);
  const {
    isOpen: isOpenProduct,
    onClose: onCloseProduct,
    setIsOpen: setIsOpenProduct,
    isDuration: isDurationProduct,
  } = usePopupDelay(duration);

  const handleElement = (id: number) => {
    // eslint-disable-next-line no-console
    console.log({ id });
    setIsOpenProduct(true);
  };

  return (
    <Styles.Block>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        duration={duration}
        isDuration={isDuration}
      >
        <WindowDelete
          onClose={onClose}
          // eslint-disable-next-line no-console
          onClick={() => console.log('close')}
        />
      </Popup>

      <Styles.ElementBlock>
        {orders.map((order) => (
          <Styles.Element
            key={order.id}
            isDuration={isDurationProduct}
            onClick={() => handleElement(order.id)}
          >
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

            <Styles.DeleteBlock>
              <Icon.Delete />
            </Styles.DeleteBlock>
          </Styles.Element>
        ))}
      </Styles.ElementBlock>

      <ModalProduct
        duration={duration}
        setIsOpen={setIsOpen}
        isOpen={isOpenProduct}
        onClose={onCloseProduct}
        isDuration={isDurationProduct}
      />
    </Styles.Block>
  );
};

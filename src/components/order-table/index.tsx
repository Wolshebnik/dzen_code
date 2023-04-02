import { useState } from 'react';

import * as Icon from 'assets';
import { IProducts } from 'types';
import { deleteProduct } from 'api';
import { usePopupDelay } from 'hook/delay';
import { addEnding, formatDate, getMoney } from 'utils';
import { ModalProduct, Popup, WindowDelete } from 'components';

import * as Styles from './styles';
import { IOrdersProps } from './types';

const duration = 300;

export const OrderTable = ({ orders, setOrders }: IOrdersProps) => {
  const { isDuration, onClose, isOpen, setIsOpen } = usePopupDelay(duration);
  const {
    isOpen: isOpenProduct,
    onClose: onCloseProduct,
    setIsOpen: setIsOpenProduct,
    isDuration: isDurationProduct,
  } = usePopupDelay(duration);

  const [products, setProducts] = useState<IProducts[]>([]);
  const [activeId, setActiveId] = useState<null | number>(null);
  const [deletingId, setDeletingId] = useState<null | number>(null);

  const handleElement = (value: IProducts[], id: number) => {
    if (isOpenProduct) return;
    setActiveId(id);
    setProducts(value);
    setIsOpenProduct(true);
  };

  const handleDelete = async () => {
    try {
      if (deletingId) {
        await deleteProduct(deletingId);
        const newProducts = products.filter((prod) => prod.id !== deletingId);

        setOrders(
          orders.map((order) => ({
            ...order,
            products: order.id === activeId ? newProducts : order.products,
          }))
        );

        if (newProducts.length === 0) {
          const newOrders = orders.filter((order) => order.id !== activeId);
          setOrders(newOrders);
          onCloseProduct();
        }
        setProducts(newProducts);
        setDeletingId(null);
        onClose();
      }
    } catch (e: any) {
      // eslint-disable-next-line no-console
      console.log(e?.response?.data?.error?.message);
    }
  };

  const getDeletingProduct = () => {
    if (activeId !== null && deletingId !== null) {
      const productsByOrder = orders?.find(
        (order) => order.id === activeId
      )?.products;

      return productsByOrder?.find((product) => product.id === deletingId);
    }

    return undefined;
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
          onClick={handleDelete}
          product={getDeletingProduct()}
        />
      </Popup>

      <Styles.ElementBlock>
        {orders.map((order) => (
          <Styles.Element
            key={order.id}
            active={activeId === order.id}
            isDuration={isDurationProduct}
            onClick={() => handleElement(order.products, order.id)}
          >
            <Styles.Chevron
              active={activeId === order.id}
              isDuration={isDurationProduct}
            >
              <Icon.ChevronRight />
            </Styles.Chevron>
            <h3>{order.title}</h3>

            <Styles.BurgerBlock>
              <Icon.Burger />
            </Styles.BurgerBlock>

            <Styles.CountProducts>
              <Styles.Count>{order.products?.length}</Styles.Count>
              <span>{addEnding(order.products?.length, 'Продукт')}</span>
            </Styles.CountProducts>

            <Styles.DateBlock>
              <span>{formatDate(order.date, 'M/dd')}</span>
              <span>{formatDate(order.date)}</span>
            </Styles.DateBlock>

            <Styles.MoneyBlock>
              <span>{getMoney(order.products).usd} $</span>
              <span>{getMoney(order.products).uah} UAH</span>
            </Styles.MoneyBlock>

            <Styles.DeleteBlock>
              <Icon.Delete />
            </Styles.DeleteBlock>
          </Styles.Element>
        ))}
      </Styles.ElementBlock>

      <ModalProduct
        products={products}
        duration={duration}
        setIsOpen={setIsOpen}
        isOpen={isOpenProduct}
        onDelete={setDeletingId}
        onClose={onCloseProduct}
        isDuration={isDurationProduct}
      />
    </Styles.Block>
  );
};

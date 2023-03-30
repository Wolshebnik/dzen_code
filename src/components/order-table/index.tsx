import * as Icon from 'assets';

import * as Styles from './styles';

export const OrderTable = () => {
  const handleElement = () => {
    // eslint-disable-next-line no-console
    console.log('element');
  };

  const handleDelete: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation();
    // eslint-disable-next-line no-console
    console.log('delete');
  };

  return (
    <Styles.Block>
      <Styles.Element onClick={handleElement}>
        <Styles.Description>Description</Styles.Description>

        <Styles.BurgerBlock>
          <Icon.Burger />
        </Styles.BurgerBlock>

        <Styles.CountProducts>
          <Styles.Count>23</Styles.Count>
          <span>Продукта</span>
        </Styles.CountProducts>

        <Styles.DateBlock>26/Apr/2017</Styles.DateBlock>

        <Styles.MoneyBlock>25 000.00 uah</Styles.MoneyBlock>

        <Styles.DeleteBlock onClick={handleDelete}>
          <Icon.Delete />
        </Styles.DeleteBlock>
      </Styles.Element>

      <Styles.Element>
        <Styles.Description>Description</Styles.Description>

        <Styles.BurgerBlock>
          <Icon.Burger />
        </Styles.BurgerBlock>

        <Styles.CountProducts>
          <Styles.Count>23</Styles.Count>
          <span>Продукта</span>
        </Styles.CountProducts>

        <Styles.DateBlock>26/Apr/2017</Styles.DateBlock>

        <Styles.MoneyBlock>25 000.00 uah</Styles.MoneyBlock>

        <Styles.DeleteBlock>
          <Icon.Delete />
        </Styles.DeleteBlock>
      </Styles.Element>
    </Styles.Block>
  );
};

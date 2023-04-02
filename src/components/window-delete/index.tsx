import * as Icon from 'assets';

import * as Styles from './styles';
import { Button } from '../button';
import { IWindowDelete } from './types';

export const WindowDelete = ({ onClick, onClose, product }: IWindowDelete) => {
  const { photo, specification, serialNumber } = product ?? {};

  return (
    <Styles.Block>
      <Styles.TextBlock>
        <Styles.Title>Вы уверены, что хотите удалить этот приход?</Styles.Title>

        <Styles.ProductBlock>
          <Styles.Circle />

          <Styles.Image src={photo} alt="product" />

          <Styles.Description>
            <Styles.Name>{specification}</Styles.Name>
            <Styles.SerialNumber>{serialNumber}</Styles.SerialNumber>
          </Styles.Description>
        </Styles.ProductBlock>
      </Styles.TextBlock>

      <Styles.ButtonBlock>
        <Button text="Отменить" onClick={onClose} styleType="ghost" />
        <Button text="Удалить" onClick={onClick} icon={<Icon.Delete />} />
      </Styles.ButtonBlock>
    </Styles.Block>
  );
};

import * as Icon from 'assets';

import * as Styles from './styles';
import { Button } from '../button';
import { IWindowDelete } from './types';

export const WindowDelete = ({ onClick, onClose }: IWindowDelete) => {
  return (
    <Styles.Block>
      <Styles.TextBlock>
        <Styles.Title>
          <Styles.Wrapper>
            Вы уверены, что хотите удалить этот приход?
          </Styles.Wrapper>
        </Styles.Title>
        <p>
          This is an example of a React popup with overlay, TypeScript and
          animation!
        </p>
      </Styles.TextBlock>
      <Styles.ButtonBlock>
        <Button text="Отменить" onClick={onClose} styleType="ghost" />
        <Button text="Удалить" onClick={onClick} icon={<Icon.Delete />} />
      </Styles.ButtonBlock>
    </Styles.Block>
  );
};

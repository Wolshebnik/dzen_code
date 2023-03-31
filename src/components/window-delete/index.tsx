import * as Styles from './styles';
import { IWindowDelete } from './types';

export const WindowDelete = ({ onClick }: IWindowDelete) => {
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
        <button onClick={onClick}>bottom</button>
      </Styles.ButtonBlock>
    </Styles.Block>
  );
};

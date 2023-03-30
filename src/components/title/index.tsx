import * as Icon from 'assets';

import * as Styles from './styles';

export const Title = ({ count }: { count?: number }) => {
  return (
    <Styles.Title>
      <Styles.Plus>
        <Icon.Plus />
      </Styles.Plus>
      Приходы / {count && count}
    </Styles.Title>
  );
};

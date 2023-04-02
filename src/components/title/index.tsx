import * as Icon from 'assets';
import { Select } from 'components';

import { ITitle } from './types';
import * as Styles from './styles';

export const Title = ({ count, isSelect, values }: ITitle) => {
  return (
    <Styles.Title>
      <Styles.Plus>
        <Icon.Plus />
      </Styles.Plus>
      <span>Приходы</span> / {count && count}
      {isSelect && <Select values={values} />}
    </Styles.Title>
  );
};

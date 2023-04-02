import * as Icon from 'assets';
import { Select } from 'components';

import { ITitle } from './types';
import * as Styles from './styles';

export const Title = ({ count, isSelect, values, text }: ITitle) => {
  return (
    <Styles.Title>
      <Styles.Plus>
        <Icon.Plus />
      </Styles.Plus>
      <span>{text}</span> / {count && count}
      {isSelect && <Select values={values} />}
    </Styles.Title>
  );
};

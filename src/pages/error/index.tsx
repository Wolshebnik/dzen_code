import { useRouteError } from 'react-router-dom';

import { IError } from './types';
import * as Styles from './styles';

export const Error = () => {
  const error = useRouteError() as IError;

  return (
    <Styles.ErrorBlock>
      <h1>Oops!</h1>
      <p>Sorry, Something went wrong</p>
      {error && <p>{error.statusText}</p>}
    </Styles.ErrorBlock>
  );
};

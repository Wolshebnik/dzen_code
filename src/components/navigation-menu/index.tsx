import { AvatarImage } from '../avatar-image';

import { ROUTES } from 'routes/constants';

import * as Styles from './styles';

export const NavigationMenu = () => {
  return (
    <Styles.Block>
      <AvatarImage source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU" />

      <Styles.LinksBlock>
        <Styles.Link to={ROUTES.orders}>Приход</Styles.Link>
        <Styles.Link to={ROUTES.products}>Группы</Styles.Link>
      </Styles.LinksBlock>
    </Styles.Block>
  );
};

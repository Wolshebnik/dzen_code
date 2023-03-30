import * as Styles from './styles';
import { Time } from './time';

export const Header = () => {
  return (
    <Styles.Block>
      <Styles.TextLogo>Inventory</Styles.TextLogo>
      <Time />
    </Styles.Block>
  );
};

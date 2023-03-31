import { IButton } from './types';
import * as Styles from './styles';

export const Button = ({
  text,
  icon,
  onClick,
  styleType = 'delete',
}: IButton) => {
  return (
    <Styles.StyledButton styleType={styleType} onClick={onClick}>
      {icon && icon}
      <Styles.Span>{text}</Styles.Span>
    </Styles.StyledButton>
  );
};

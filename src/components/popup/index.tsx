import * as Icon from 'assets';
import { usePopupDelay } from 'hook/delay';

import * as Styles from './styles';
import { ChildrenProps, IPopup } from './types';

const delay = 300;

const Popup = ({ isOpen, onClose, children }: ChildrenProps<IPopup>) => {
  const { isOverlayOpen, handleClick } = usePopupDelay(delay, isOpen, onClose);

  return (
    <>
      {isOpen && (
        <Styles.Overlay
          duration={delay}
          onClick={handleClick}
          isOverlayOpen={isOverlayOpen}
        >
          <Styles.PopupContainer duration={delay} isOverlayOpen={isOverlayOpen}>
            {children}
            <Styles.ButtonClose>
              <Icon.Close />
            </Styles.ButtonClose>
          </Styles.PopupContainer>
        </Styles.Overlay>
      )}
    </>
  );
};

export { Popup };

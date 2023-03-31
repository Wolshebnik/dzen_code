import { useEffect } from 'react';

import * as Icon from 'assets';
import { usePopupDelay } from 'hook/delay';

import * as Styles from './styles';
import { ChildrenProps, IPopup } from './types';

const delay = 300;

const Popup = ({ isOpen, onClose, children }: ChildrenProps<IPopup>) => {
  const div = document.getElementById('wrapper');

  const { isOverlayOpen, handleClick } = usePopupDelay(delay, isOpen, onClose);

  useEffect(() => {
    if (isOpen && div) {
      div.style.overflow = 'hidden';
    }
    return () => div?.removeAttribute('style');
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Styles.Overlay
          duration={delay}
          onClick={handleClick}
          isOverlayOpen={isOverlayOpen}
        >
          <Styles.PopupContainer
            duration={delay}
            isOverlayOpen={isOverlayOpen}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <Styles.ButtonClose onClick={handleClick}>
              <Icon.Close />
            </Styles.ButtonClose>
          </Styles.PopupContainer>
        </Styles.Overlay>
      )}
    </>
  );
};

export { Popup };

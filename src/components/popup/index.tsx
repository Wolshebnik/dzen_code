import { useEffect } from 'react';

import * as Icon from 'assets';

import * as Styles from './styles';
import { ChildrenProps, IPopup } from './types';

const Popup = ({
  delay,
  isOpen,
  onClose,
  isDelay,
  children,
}: ChildrenProps<IPopup>) => {
  const div = document.getElementById('wrapper');

  useEffect(() => {
    if (isOpen && div) {
      div.style.overflow = 'hidden';
    }
    return () => div?.removeAttribute('style');
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Styles.Overlay duration={delay} onClick={onClose} isDelay={isDelay}>
          <Styles.PopupContainer
            duration={delay}
            isDelay={isDelay}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <Styles.ButtonClose onClick={onClose}>
              <Icon.Close />
            </Styles.ButtonClose>
          </Styles.PopupContainer>
        </Styles.Overlay>
      )}
    </>
  );
};

export { Popup };

import { useEffect } from 'react';

import * as Icon from 'assets';

import * as Styles from './styles';
import { ChildrenProps, IPopup } from './types';

const Popup = ({
  isOpen,
  onClose,
  duration,
  children,
  isDuration,
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
        <Styles.Overlay
          onClick={onClose}
          duration={duration}
          isDuration={isDuration}
        >
          <Styles.PopupContainer
            duration={duration}
            isDuration={isDuration}
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

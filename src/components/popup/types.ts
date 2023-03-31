import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export interface IPopup {
  isOpen: boolean;
  onClose: () => void;
}

export interface PopupStylesProps {
  isOverlayOpen: boolean;
  duration: number;
}

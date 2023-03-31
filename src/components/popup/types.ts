import { PropsWithChildren } from 'react';

export type ChildrenProps<T = unknown> = PropsWithChildren<T>;

export interface IPopup {
  delay: number;
  isOpen: boolean;
  isDelay: boolean;
  onClose: () => void;
}

export interface PopupStylesProps {
  duration: number;
  isDelay: boolean;
}

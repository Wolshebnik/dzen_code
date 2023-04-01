export interface IPopup {
  isOpen: boolean;
  duration: number;
  isDuration: boolean;
  onClose: () => void;
}

export interface PopupStylesProps {
  duration: number;
  isDuration: boolean;
}

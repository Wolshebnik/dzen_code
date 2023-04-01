export interface IModal {
  isOpen: boolean;
  duration: number;
  isDuration: boolean;
  onClose: () => void;
  setIsOpen: (value: boolean) => void;
}

export interface IStyledProps {
  duration: number;
  isDuration: boolean;
}

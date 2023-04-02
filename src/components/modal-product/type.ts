import { IProducts } from 'types';

export interface IModal {
  isOpen: boolean;
  duration: number;
  isDuration: boolean;
  onClose: () => void;
  setIsOpen: (value: boolean) => void;
  products: IProducts[];
}

export interface IStyledProps {
  duration: number;
  isDuration: boolean;
}

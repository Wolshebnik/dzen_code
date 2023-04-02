import { IProducts } from 'types';

export interface IModal {
  isOpen: boolean;
  duration: number;
  isDuration: boolean;
  onClose: () => void;
  products: IProducts[];
  onDelete: (id: number) => void;
  setIsOpen: (bool: boolean) => void;
}

export interface IStyledProps {
  duration: number;
  isDuration: boolean;
}

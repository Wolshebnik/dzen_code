import { IProducts } from 'types';

export interface IWindowDelete {
  onClick: () => void;
  onClose: () => void;
  product: IProducts | undefined;
}

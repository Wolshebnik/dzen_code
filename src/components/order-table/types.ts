import { IOrders } from 'types';

export interface IOrdersProps {
  orders: IOrders[];
  setOrders: (orders: IOrders[]) => void;
}

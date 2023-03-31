import { ButtonHTMLAttributes, ReactNode } from 'react';

export type StyleType = 'delete' | 'ghost';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
  styleType?: StyleType;
}

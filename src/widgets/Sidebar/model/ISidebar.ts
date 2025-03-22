import { ReactNode } from 'react';

export interface SidebarProps {
  children: ReactNode;
  $right?: boolean;
  $width?: 'middle' | 'small';
}

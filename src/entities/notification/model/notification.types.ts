import { ReactNode } from 'react';
import { ApiProfile, IUser } from '@entities/friends';

export type Types = 'error' | 'warning' | 'info' | 'success' | undefined;
export type Levels = 'low' | 'medium' | 'height' | undefined;

export interface INotifyItem {
  id: number;
  content: string;
  createdAt: string;
  sender: IUser;
}

export interface INotification {
  message: {
    title: ReactNode;
    type: Types;
    level?: Levels;
  };
  count: number;
  notifications: INotifyItem[];
  isLoading: boolean;
  isError: boolean;
  page: number;
  limit: number;
  isHaseMore: boolean;
}

export interface APINotifyItem {
  id: number;
  content: string;
  createdAt: string;
  sender: ApiProfile;
}

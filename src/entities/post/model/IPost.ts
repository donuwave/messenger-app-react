import { UploadFile } from 'antd';

export interface IPostState {
  id: number;
  userId: number;
  content: string[];
  countLikes: number;
  likesList: number[];
  shared: number;
  comments: number;
  files: UploadFile[];
  createdAt: string;
  updatedAt: string;
  view: 'slider' | 'grid';
  isDisabledComments: boolean;
  author: {
    name: string;
    imgSubstitute: string;
    id: number;
    statusConnected: boolean;
    timeConnected: number;
  };
}

export interface ApiPostState extends Omit<IPostState, 'comments'> {
  comments: ICommentsState[];
}

export interface ICommentsState {
  id: number;
  content: string[];
  createdAt: string;
  updatedAt: string;
  likesList: number[];
  postId: number;
  countLikes: number;
  author: {
    name: string;
    imgSubstitute: string;
    id: number;
    statusConnected: boolean;
    timeConnected: number;
  };
  isEdit: boolean;
}

export interface IRecalculationOfComments {
  id: number;
  action: 0 | 1; // 0 - удаление, 1 - прибавление
}

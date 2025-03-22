import { createAsyncThunk } from '@reduxjs/toolkit';
import { IConfigAsyncThunk, IError } from '@shared/models';
import { API } from '@shared/api';
import { showMessage } from '@entities/notification';
import { IPostState } from '@entities/post';
import { AxiosError } from 'axios';

export const deletePostById = createAsyncThunk<IPostState, number, IConfigAsyncThunk>(
  'post/delete',
  async (postId, { rejectWithValue, dispatch }) => {
    return API<IPostState>({
      url: `api/posts/${postId}`,
      method: 'DELETE',
    })
      .then(({ data }) => {
        return data;
      })
      .catch(({ response }: AxiosError<IError>) => {
        let message = 'Неудалось удалить пост';
        if (response?.status === 400) {
          message = 'У вас нет прав на удаления поста';
        }

        dispatch(
          showMessage({
            title: message,
            type: 'warning',
            level: 'medium',
          })
        );

        return rejectWithValue(response?.data);
      });
  }
);

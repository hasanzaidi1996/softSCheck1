import { BackendInstance, config } from 'config';
import { handlerError } from 'utils/ErrorHandler';
import { updateAlert } from './alertAction';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createCommentSucces,
  getCommentsFailure,
  getCommentsSuccess
} from 'appRedux/reducers/commentReducer';
import { IAddComment } from 'types/ReduxTypes/comment/action';

/**
 * fetch all created Users
 *
 * @returns {boolean} register
 */
export const getComments = createAsyncThunk('comments', async (_, { dispatch }) => {
  try {
    const res = await BackendInstance.get('/comment', config);
    dispatch(getCommentsSuccess(res.data.data));
    return true;
  } catch (err) {
    dispatch(getCommentsFailure());
    handlerError(err).forEach((error: string) => {
      dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
    });
    return false;
  }
});

/**
 * create New User
 *
 * @returns {boolean} register
 */
export const addComment = createAsyncThunk('comments', async (data: IAddComment, { dispatch }) => {
  try {
    const _data = JSON.stringify(data);
    const res = await BackendInstance.post('comment', _data, config);
    dispatch(createCommentSucces(res.data.data));
    dispatch(updateAlert({ place: 'tc', message: res.data.msg, type: 'success' }));
    return true;
  } catch (err) {
    handlerError(err).forEach((error: string) => {
      dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
    });
    return false;
  }
});

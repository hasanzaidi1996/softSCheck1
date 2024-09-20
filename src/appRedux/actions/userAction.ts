import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserSucces, getUsersFailure, getUsersSuccess } from 'appRedux/reducers/usersReducer';
import { BackendInstance, config } from 'config';
import { IAddUser } from 'types/ReduxTypes/user/action';
import { handlerError } from 'utils/ErrorHandler';
import { updateAlert } from './alertAction';

/**
 * fetch all created Users
 *
 * @returns {boolean} register
 */
export const getUsers = createAsyncThunk('subscriptions/getUsers', async (_, { dispatch }) => {
  try {
    const res = await BackendInstance.get('user', config);
    dispatch(getUsersSuccess(res.data.data));
    return true;
  } catch (err) {
    dispatch(getUsersFailure());
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
export const addUser = createAsyncThunk(
  'subscriptions/getUsers',
  async (data: IAddUser, { dispatch }) => {
    try {
      const _data = JSON.stringify(data);
      const res = await BackendInstance.post('user/create', _data, config);
      dispatch(createUserSucces(res.data.data));
      return true;
    } catch (err) {
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createPhishingSucces,
  getPhishingsFailure,
  getPhishingsSuccess
} from 'appRedux/reducers/phishingReducer';
import { BackendInstance, config } from 'config';
import { IAddPhishing, ITriggerPhishing } from 'types/ReduxTypes/phishing/action';
import { handlerError } from 'utils/ErrorHandler';
import { updateAlert } from './alertAction';

/**
 * fetch all created Users
 *
 * @returns {boolean} register
 */
export const getPhishingLogs = createAsyncThunk('phishing/logs', async (_, { dispatch }) => {
  try {
    const res = await BackendInstance.get('phishing/logs', config);
    dispatch(getPhishingsSuccess(res.data.data));
    return true;
  } catch (err) {
    dispatch(getPhishingsFailure());
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
export const addPhishing = createAsyncThunk(
  'phishings',
  async (data: IAddPhishing, { dispatch }) => {
    try {
      const _data = JSON.stringify(data);
      const res = await BackendInstance.post('phishing/mail', _data, config);
      dispatch(createPhishingSucces(res.data.data));
      dispatch(updateAlert({ place: 'tc', message: res.data.msg, type: 'success' }));
      return true;
    } catch (err) {
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);
export const trigerPhishing = createAsyncThunk(
  'phishings',
  async (data: ITriggerPhishing, { dispatch }) => {
    try {
      const id = data.id;
      const res = await BackendInstance.post(`phishing/trigger-phish/${id}`, config);
      dispatch(createPhishingSucces(res.data.data));
      dispatch(updateAlert({ place: 'tc', message: res.data.msg, type: 'success' }));
      return true;
    } catch (err) {
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

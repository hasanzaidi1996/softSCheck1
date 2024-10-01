import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAddOnsFailure, getAddOnsSuccess } from 'appRedux/reducers/addOnReducer';
import { BackendInstance, config } from 'config';
import { handlerError } from 'utils/ErrorHandler';
import { updateAlert } from './alertAction';

/**
 * fetch all subscriptions for user
 *
 * @returns {boolean} register
 */
export const getAddOns = createAsyncThunk('addOns/getAddOns', async (_, { dispatch }) => {
  try {
    const res = await BackendInstance.get('addon', config);
    dispatch(getAddOnsSuccess(res.data.data));
    return true;
  } catch (err) {
    dispatch(getAddOnsFailure());
    handlerError(err).forEach((error: string) => {
      dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
    });
    return false;
  }
});

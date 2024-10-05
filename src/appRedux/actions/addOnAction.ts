import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAddOnsFailure,
  getAddOnsSuccess,
  getProviderFailure,
  getProviderSuccess,
  getRecommendationFailure,
  getRecommendationSuccess
} from 'appRedux/reducers/addOnReducer';
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

/**
 * fetch all recommendations for mssp by user
 *
 * @returns {boolean} register
 */
export const getRecommendations = createAsyncThunk(
  'addOns/getRecommendations',
  async (_, { dispatch }) => {
    try {
      const res = await BackendInstance.get('service-provider/recommendations', config);
      dispatch(getRecommendationSuccess(res.data.data));
      return true;
    } catch (err) {
      dispatch(getRecommendationFailure());
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

/**
 * fetch all subscriptions for user
 *
 * @returns {boolean} register
 */
export const getProviders = createAsyncThunk('addOns/getProviders', async (_, { dispatch }) => {
  try {
    const res = await BackendInstance.get('service-provider', config);
    dispatch(getProviderSuccess(res.data.data));
    return true;
  } catch (err) {
    dispatch(getProviderFailure());
    handlerError(err).forEach((error: string) => {
      dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
    });
    return false;
  }
});

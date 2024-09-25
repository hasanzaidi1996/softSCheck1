import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getSubscribedFailure,
  getSubscribedSuccess,
  getSubscriptionsFailure,
  getSubscriptionsSuccess,
  subscribeSuccess,
  unsubscribeSuccess
} from 'appRedux/reducers/subscriptionReducer';
import { BackendInstance, config } from 'config';
import { handlerError } from 'utils/ErrorHandler';
import { updateAlert } from './alertAction';

/**
 * fetch all subscriptions for user
 *
 * @returns {boolean} register
 */
export const getSubscriptions = createAsyncThunk(
  'subscriptions/getSubscriptions',
  async (_, { dispatch }) => {
    try {
      const res = await BackendInstance.get('subscription', config);
      dispatch(getSubscriptionsSuccess(res.data.data));
      return true;
    } catch (err) {
      dispatch(getSubscriptionsFailure());
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
export const getUserSubsciption = createAsyncThunk(
  'subscriptions/getUserSubsciption',
  async (_, { dispatch }) => {
    try {
      const res = await BackendInstance.get('subscription/subscribe', config);
      dispatch(getSubscribedSuccess(res.data.data));
      return true;
    } catch (err) {
      dispatch(getSubscribedFailure());
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

/**
 * subscribe to subscription
 *
 * @returns {boolean} register
 */
export const subscribe = createAsyncThunk(
  'subscriptions/subscribe',
  async (id: string, { dispatch }) => {
    try {
      const data = JSON.stringify({ subscriptionId: id });
      const res = await BackendInstance.post('subscription/subscribe', data, config);
      dispatch(subscribeSuccess(res.data.data));
      return true;
    } catch (err) {
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

/**
 * subscribe to subscription
 *
 * @returns {boolean} register
 */
export const unsubscribe = createAsyncThunk(
  'subscriptions/unsubscribe',
  async (_, { dispatch }) => {
    try {
      const res = await BackendInstance.post('subscription/unsubscribe', config);
      dispatch(unsubscribeSuccess(res.data.data));
      return true;
    } catch (err) {
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });
      return false;
    }
  }
);

import { BackendInstance, config } from 'config';
import { handlerError } from '../../utils/ErrorHandler';
import { updateAlert } from './alertAction';
import { userLogout } from 'utils/Logout';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { DISCONNECT_SOCKET } from 'appRedux/middleware/socket/events';

// types
import type {
  ILoginFormData,
  IRegisterFormData,
  IUser,
  ILoginResponseData
} from 'types/ReduxTypes/auth';
import { RESET } from 'appRedux/middleware/root/events';

// reducers
import {
  userLoaded,
  loginSuccess,
  authReset,
  clearSession,
  registerSuccess
} from '../reducers/authReducer';

/**
 * creates user session and logs them in
 *
 * @returns {boolean} true if login form is valid and successful, false otherwise
 */
export const verifyEmail = createAsyncThunk(
  'loginSlice/verifyEmail',
  async (emailToken: string, { dispatch }) => {
    const body = JSON.stringify({
      emailToken: emailToken
    });
    try {
      const res = await BackendInstance.post('user/verify-email', body, config);

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

/**
 * creates user session and logs them in
 *
 * @returns {boolean} true if login form is valid and successful, false otherwise
 */
export const Login = createAsyncThunk(
  'loginSlice/login',
  async (formData: ILoginFormData, { dispatch }) => {
    const body = JSON.stringify(formData);
    try {
      const res = await BackendInstance.post('user/login', body, config);
      const responseData = res.data.data as ILoginResponseData;
      dispatch(loginSuccess());
      dispatch(loadUser());
      return responseData;
    } catch (err) {
      handlerError(err).forEach((error: string) => {
        dispatch(updateAlert({ place: 'tc', message: error, type: 'danger' }));
      });

      dispatch(clearSession());
      return false;
    }
  }
);

/**
 * registered new user
 *
 * @returns {boolean} register
 */
export const register = createAsyncThunk(
  'registerSlice/register',
  async (formData: IRegisterFormData, { dispatch }) => {
    const body = JSON.stringify(formData);
    try {
      const res = await BackendInstance.post('user/register', body, config);
      dispatch(registerSuccess());
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

/**
 * loads current user to state
 *
 * @returns {boolean} true if user is loaded successfully
 */
export const loadUser = createAsyncThunk('auth/loadUser', async (_, { dispatch }) => {
  // const LATEST_NOTIFICATION = 0;
  try {
    // const csrfRequest = await BackendInstance.get('csrf');
    // setCsrfToken(csrfRequest.data.data.csrfToken);
    const res = await BackendInstance.post('user/authorization');
    const { role, token } = res.data.data;

    await dispatch(
      userLoaded({
        role: role,
        user: { ...res.data.data } as IUser,
        token: token,
        isAuthenticated: true
      })
    );
    dispatch({
      type: 'CONNECT_SOCKET'
    });
    // dispatch(fetchNotifications(LATEST_NOTIFICATION));
    return true;
  } catch (err) {
    console.log('asdasd', err);
    dispatch(clearSession());
    return false;
  }
});

/**
 * Logs out user and clears session
 *
 * @returns {boolean} true if the session is cleared, false otherwise
 */
export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  let returnValue = false;
  try {
    /*
      {FOR OFFLINE USE}
      First call api then dispatch
      action beacuse logout requires
      secondary token while dispatching
      logout action remove that.
          */
    await userLogout();

    returnValue = true;
  } catch (err) {
    return returnValue;
  } finally {
    /*
      If api return error, still
      dispatch action so that user 
      states are clear and token is removed
      */
    // dispatch({
    //   type: DISCONNECT_SOCKET
    // });
    dispatch({ type: RESET });
    dispatch(authReset());
    dispatch(clearSession());
    // eslint-disable-next-line no-unsafe-finally
    return returnValue;
  }
});

/**
 * Reset all auth tokens and vars
 *
 * @returns {boolean} true if Auth is reset successfully
 */
export const resetAuth = createAsyncThunk('auth/resetAuth', async (_, { dispatch }) => {
  try {
    dispatch(authReset());
    return true;
  } catch (err) {
    return false;
  }
});

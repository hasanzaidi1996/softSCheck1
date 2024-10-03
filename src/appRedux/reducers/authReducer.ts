import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { removeSecondaryToken } from 'utils/Logout';
import { AuthState } from 'types/ReduxTypes/auth';
import { OTPData } from 'views/settings/types';

const initialState: AuthState = {
  token: null,
  isAuthenticated: null,
  isRegistered: null,
  loading: true,
  user: null,
  role: null
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    userLoaded: (state, { payload }: PayloadAction<AuthState>) => {
      const authToken = payload.token;
      delete payload.token;

      state.isAuthenticated = payload.isAuthenticated;
      state.loading = false;
      state.role = payload.role;
      state.user = payload.user;
      state.token = authToken;
    },
    registerSuccess: (state) => {
      return state;
    },
    generateOTPSuccess: (state, { payload }: PayloadAction<OTPData>) => {
      state.user = state.user ? { ...state.user, totpSecret: payload.secret } : null;
    },
    removeOTPSuccess: (state) => {
      state.user = state.user ? { ...state.user, totpSecret: undefined } : null;
    },
    loginSuccess: () => {},
    loginFailure: (state) => {
      return state;
    },
    authReset: () => {
      return initialState;
    },
    clearSession: (state) => {
      removeSecondaryToken();
      state.isAuthenticated = false;
      state.loading = false;
    }
  }
});

export const {
  userLoaded,
  registerSuccess,
  loginSuccess,
  authReset,
  clearSession,
  generateOTPSuccess,
  removeOTPSuccess
} = AuthSlice.actions;

export default AuthSlice.reducer;

/**
 * Exported selector for usage in components
 *
 * @param {Object<AuthState>} state - The state of authentication
 * @param {AuthState} state.auth - The state of auth state
 * @returns {AuthState} returns auth state object
 */
export const AuthSelector = (state: { auth: AuthState }): AuthState => {
  return state.auth;
};

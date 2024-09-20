import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'types/ReduxTypes/auth';
import { IUserState } from 'types/ReduxTypes/user';

const initialState: IUserState = {
  users: null,
  usersLoading: true
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    getUsersSuccess: (state, { payload }: PayloadAction<IUserState['users']>) => {
      state.users = payload;
      state.usersLoading = false;
    },
    createUserSucces: (state, { payload }: PayloadAction<IUser>) => {
      state.users = state.users ? [...state.users, payload] : [payload];
    },
    getUsersFailure: (state) => {
      state.usersLoading = false;
    }
  }
});

export const { getUsersFailure, getUsersSuccess, createUserSucces } = UserSlice.actions;

export default UserSlice.reducer;

/**
 * Exported selector for usage in components
 *
 * @param {Object<IUserState>} state - The state of Users
 * @param {IUserState} state.user - The state of User state
 * @returns {IUserState} returns User state object
 */
export const UserSelector = (state: { user: IUserState }): IUserState => {
  return state.user;
};

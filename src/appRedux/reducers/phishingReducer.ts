import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhishingState } from 'types/ReduxTypes/phishing';
import { IPhishing } from 'types/ReduxTypes/phishing/action';

const initialState: IPhishingState = {
  phishings: null,
  phishingsLoading: true
};

const UserSlice = createSlice({
  name: 'phishing',
  initialState: initialState,
  reducers: {
    getPhishingsSuccess: (state, { payload }: PayloadAction<IPhishingState['phishings']>) => {
      state.phishings = payload;
      state.phishingsLoading = false;
    },
    createPhishingSucces: (state, { payload }: PayloadAction<IPhishing>) => {
      state.phishings = state.phishings ? [...state.phishings, payload] : [payload];
    },

    getPhishingsFailure: (state) => {
      state.phishingsLoading = false;
    }
  }
});

export const { getPhishingsFailure, getPhishingsSuccess, createPhishingSucces } = UserSlice.actions;

export default UserSlice.reducer;

/**
 * Exported selector for usage in components
 *
 * @param {Object<IPhishingState>} state - The state of Users
 * @param {IPhishingState} state.user - The state of User state
 * @returns {IPhishingState} returns User state object
 */
export const PhishingSelector = (state: { phishing: IPhishingState }): IPhishingState => {
  return state.phishing;
};

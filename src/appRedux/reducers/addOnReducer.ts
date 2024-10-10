import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddOnState, IComment } from 'types/ReduxTypes/addOn';

const initialState: IAddOnState = {
  addOns: null,
  addOnLoading: true,
  providers: null,
  providerLoading: true,
  recommendationLoading: true,
  recommendations: null,
  comments: null,
  commentsLoading: true
};

const AddOnSlice = createSlice({
  name: 'addOn',
  initialState: initialState,
  reducers: {
    getAddOnsSuccess: (state, { payload }: PayloadAction<IAddOnState['addOns']>) => {
      state.addOns = payload;
      state.addOnLoading = false;
    },
    getAddOnsFailure: (state) => {
      state.addOnLoading = false;
    },
    getRecommendationSuccess: (
      state,
      { payload }: PayloadAction<IAddOnState['recommendations']>
    ) => {
      state.recommendations = payload;
      state.recommendationLoading = false;
    },
    getRecommendationFailure: (state) => {
      state.recommendationLoading = false;
    },
    getProviderSuccess: (state, { payload }: PayloadAction<IAddOnState['providers']>) => {
      state.providers = payload;
      state.providerLoading = false;
    },
    getProviderFailure: (state) => {
      state.providerLoading = false;
    },
    getCommentSuccess: (state, { payload }: PayloadAction<IAddOnState['comments']>) => {
      state.comments = payload;
      state.commentsLoading = false;
    },
    getCommentsFailure: (state) => {
      state.commentsLoading = false;
    },
    addCommentSuccess: (state, { payload }: PayloadAction<IComment>) => {
      state.comments = state.comments ? [...state.comments, payload] : [payload];
    }
  }
});

export const {
  getAddOnsFailure,
  getAddOnsSuccess,
  getProviderFailure,
  getProviderSuccess,
  getRecommendationFailure,
  getRecommendationSuccess,
  getCommentSuccess,
  getCommentsFailure,
  addCommentSuccess
} = AddOnSlice.actions;

export default AddOnSlice.reducer;

/**
 * Exported selector for usage in components
 *
 * @param {Object<IAddOnState>} state - The state of AddOns
 * @param {IAddOnState} state.addOn - The state of AddOns state
 * @returns {IAddOnState} returns addOn state object
 */
export const AddOnSelector = (state: { addOn: IAddOnState }): IAddOnState => {
  return state.addOn;
};

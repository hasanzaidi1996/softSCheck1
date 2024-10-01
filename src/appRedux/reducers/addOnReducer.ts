import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddOnState } from 'types/ReduxTypes/addOn';

const initialState: IAddOnState = {
  addOns: null,
  addOnLoading: true
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
    }
  }
});

export const { getAddOnsFailure, getAddOnsSuccess } = AddOnSlice.actions;

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

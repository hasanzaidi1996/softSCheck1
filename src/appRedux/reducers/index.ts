import { Reducer } from 'react';
import { RESET } from 'appRedux/middleware/root/events';
import { CombinedState, combineReducers } from '@reduxjs/toolkit';

// reducers
import authReducer, { AuthSelector } from './authReducer';
import alertReducer, { AlertSelector } from './alertReducer';
import reportReducer, { ReportSelector } from './reportReducer';

const appReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  report: reportReducer
});

export { AuthSelector, AlertSelector, ReportSelector };

export type RootState = ReturnType<typeof appReducer>;

/**
 * Resets state on logout if needed
 *
 * @param {RootState} state - current action state dispatched from actions
 * @param {any} action - current action dispatched
 * @returns {Reducer<CombinedState>} returns combined state
 */
export const rootReducer = (state: RootState, action: any) => {
  if (action.type === RESET) {
    return appReducer({} as RootState, action);
  }
  return appReducer(state, action);
};

export default appReducer;

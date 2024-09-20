import { CombinedState, combineReducers } from '@reduxjs/toolkit';
import { RESET } from 'appRedux/middleware/root/events';
import { Reducer } from 'react';

// reducers
import alertReducer, { AlertSelector } from './alertReducer';
import authReducer, { AuthSelector } from './authReducer';
import reportReducer, { ReportSelector } from './reportReducer';
import subscriptionReducer, { SubscriptionSelector } from './subscriptionReducer';
import usersReducer, { UserSelector } from './usersReducer';

const appReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  report: reportReducer,
  subscription: subscriptionReducer,
  user: usersReducer
});

export { AlertSelector, AuthSelector, ReportSelector, SubscriptionSelector, UserSelector };

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

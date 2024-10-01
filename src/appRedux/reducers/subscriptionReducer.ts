import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISubscriptionState, IUserSubscription } from 'types/ReduxTypes/subscription';

const initialState: ISubscriptionState = {
  subscriptions: null,
  subscriptionLoading: true,
  userSubscribed: null,
  userSubscribedLoading: true
};

const SubscriptionSlice = createSlice({
  name: 'subscription',
  initialState: initialState,
  reducers: {
    getSubscriptionsSuccess: (
      state,
      { payload }: PayloadAction<ISubscriptionState['subscriptions']>
    ) => {
      state.subscriptions = payload;
      state.subscriptionLoading = false;
    },
    getSubscriptionsFailure: (state) => {
      state.subscriptionLoading = false;
    },
    getSubscribedSuccess: (state, { payload }: PayloadAction<IUserSubscription>) => {
      state.userSubscribed = payload;
      state.userSubscribedLoading = false;
    },
    getSubscribedFailure: (state) => {
      state.userSubscribedLoading = false;
    },
    subscribeSuccess: (state, { payload }: PayloadAction<IUserSubscription>) => {
      state.userSubscribed = payload;
    },
    unsubscribeSuccess: (state) => {
      state.userSubscribed = null;
    }
  }
});

export const {
  getSubscriptionsFailure,
  getSubscriptionsSuccess,
  getSubscribedFailure,
  getSubscribedSuccess,
  subscribeSuccess,
  unsubscribeSuccess
} = SubscriptionSlice.actions;

export default SubscriptionSlice.reducer;

/**
 * Exported selector for usage in components
 *
 * @param {Object<ISubscriptionState>} state - The state of Subscriptions
 * @param {ISubscriptionState} state.subscription - The state of Subscription state
 * @returns {ISubscriptionState} returns Subscription state object
 */
export const SubscriptionSelector = (state: {
  subscription: ISubscriptionState;
}): ISubscriptionState => {
  return state.subscription;
};

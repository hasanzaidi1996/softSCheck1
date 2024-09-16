import { ISubscription, IUserSubscription } from './action';

export interface ISubscriptionState {
  subscriptions: ISubscription[] | null;
  subscriptionLoading: boolean;
  userSubscribed: IUserSubscription | null;
  userSubscribedLoading: boolean;
}

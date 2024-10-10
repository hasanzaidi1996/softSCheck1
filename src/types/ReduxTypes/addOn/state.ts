import { IAddOn, IComment, IProviders, IRecommendation } from './action';

export interface IAddOnState {
  addOns: IAddOn[] | null;
  addOnLoading: boolean;
  providers: IProviders[] | null;
  providerLoading: boolean;
  recommendations: IRecommendation[] | null;
  recommendationLoading: boolean;
  comments: IComment[] | null;
  commentsLoading: boolean;
}

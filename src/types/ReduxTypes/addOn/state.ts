import { IAddOn, IProviders, IRecommendation } from './action';

export interface IAddOnState {
  addOns: IAddOn[] | null;
  addOnLoading: boolean;
  providers: IProviders[] | null;
  providerLoading: boolean;
  recommendations: IRecommendation[] | null;
  recommendationLoading: boolean;
}

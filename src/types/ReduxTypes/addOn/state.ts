import { IAddOn } from './action';

export interface IAddOnState {
  addOns: IAddOn[] | null;
  addOnLoading: boolean;
}

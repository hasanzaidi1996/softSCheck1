import { IPhishing } from './action';

export interface IPhishingState {
  phishings: IPhishing[] | null;
  phishingsLoading: boolean;
}

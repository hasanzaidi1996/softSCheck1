import { IUser } from '../auth';

export interface IUserState {
  users: IUser[] | null;
  usersLoading: boolean;
}

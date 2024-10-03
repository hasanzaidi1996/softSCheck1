import { UserRoles } from 'types';

export interface IUser {
  createdBy?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role: UserRoles;
  isVerified?: boolean;
  _id: string;
  date: string;
  address: string;
  organization: string;
  totpSecret?: string;
}

export interface AuthState {
  token?: string | null;
  isAuthenticated?: boolean | null;
  isRegistered?: boolean | null;
  loading?: boolean;
  user?: IUser | null;
  role?: UserRoles | null;
}

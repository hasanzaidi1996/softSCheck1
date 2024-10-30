import { IUser } from '../auth';

export interface IAddComment {
  to: string;
  description: string;
}

export interface IComment {
  _id: string;
  createdBy: string | IUser;
  createdFor: string | IUser;
  description: string;
}

import { UserRoles } from 'types';

export interface IAddUser {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
}

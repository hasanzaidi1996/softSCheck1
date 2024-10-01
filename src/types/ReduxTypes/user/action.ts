import { UserRoles } from 'types';

export interface IAddUser {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
}

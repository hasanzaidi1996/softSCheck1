import { UserRoles } from 'types';
import { siderClientRoutes } from 'routing';
import { IUser } from 'types/ReduxTypes/auth';

/**
 * Check if user is authorized to access current path
 *
 * @param {string} currentPath - Path to check for authorization
 * @param {string} user - user to check for
 * @returns {boolean} true if user is authorized false otherwise
 */
export const isAuthorized = (currentPath: string, user?: IUser | null): boolean => {
  if (user) {
    const { role } = user;

    /**
     * Check if role is user and path
     * does not deviate from normal
     * user paths including user keyword in start
     */
    if (role === UserRoles.Client) {
      const routeAuthorized = siderClientRoutes.some((route) => {
        const authorized = route.authenticatedUsers?.includes(user.role);
        return authorized;
      });

      if (routeAuthorized && !currentPath.includes('admin')) {
        return true;
      }
    }
  }
  return false;
};

export default isAuthorized;

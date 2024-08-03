import { ReactNode } from 'react';
import { UserRoles } from 'types';
import DashboardSvg from '../assets/icons/Dashboard.svg?react';

interface SiderRoutes {
  path: string;
  component: ReactNode;
  label: string;
  id: string;
  icon: typeof DashboardSvg;
  index?: boolean;
  authenticatedUsers?: Array<UserRoles>;
  display?: boolean;
  disabled: boolean;
}

export type { SiderRoutes };

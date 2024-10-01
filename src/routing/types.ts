import { ReactNode } from 'react';
import { UserRoles } from 'types';
import { ReactComponent as DashboardSvg } from '../assets/icons/Dashboard.svg';

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

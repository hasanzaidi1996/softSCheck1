import React from 'react';
import { UserRoles } from 'types';
import DashboardSvg from '../assets/icons/Dashboard.svg?react';

interface SiderRoutes {
  path: string;
  component: React.FC;
  label: string;
  id: string;
  icon: typeof DashboardSvg;
  index?: boolean;
  authenticatedUsers?: Array<UserRoles>;
  display?: boolean;
  disabled: boolean;
  children?: SiderRoutes[];
}

export type { SiderRoutes };

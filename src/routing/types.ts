import React from 'react';
import { UserRoles } from 'types';

interface SiderRoutes {
  path: string;
  component: React.FC;
  label: string;
  id: string;
  icon: React.ReactNode;
  index?: boolean;
  authenticatedUsers?: Array<UserRoles>;
  display?: boolean;
  disabled: boolean;
  children?: SiderRoutes[];
}

export type { SiderRoutes };

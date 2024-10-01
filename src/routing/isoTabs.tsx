import Icon from '@ant-design/icons';
import { Check, DashboardCustom } from 'assets/icons';
import { UserRoles } from 'types';
import AppDashboard from 'views/dashboard';
import Report from 'views/report';
import { SiderRoutes } from './types';

export const isoTabs: Array<SiderRoutes> = [
  {
    path: '',
    component: AppDashboard,
    label: 'Dashboard',
    id: 'dashboard',
    index: true, // index will create it first route when navigating to /
    icon: <Icon className="icon active-icon" component={DashboardCustom} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'org-control',
    component: Report,
    label: 'Organization',
    id: 'org-control',
    icon: <Icon className="icon active-icon" component={Check} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'people-control',
    component: Report,
    label: 'People',
    id: 'people-control',
    icon: <Icon className="icon active-icon" component={Check} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'physical-control',
    component: Report,
    label: 'Physical',
    id: 'physical-control',
    icon: <Icon className="icon active-icon" component={Check} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'tech-control',
    component: Report,
    label: 'Technological',
    id: 'tech-control',
    icon: <Icon className="icon active-icon" component={Check} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  }
];

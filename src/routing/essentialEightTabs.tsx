import Icon from '@ant-design/icons';
import {
  Backup,
  Check,
  DashboardCustom,
  Fingerprint,
  Lock,
  Microsoft,
  Monitor,
  PrivilegeLogo,
  Secure
} from 'assets/icons';
import { UserRoles } from 'types';
import AppHardening from 'views/appHardening';
import AppWhiteListing from 'views/appWhiteListing';
import DailyBackups from 'views/dailyBackups';
import AppDashboard from 'views/dashboard';
import MacroMSOffice from 'views/macroMSOffice';
import MFA from 'views/mfa';
import PatchApplication from 'views/patchApp';
import PatchOS from 'views/patchOS';
import Report from 'views/report';
import RestrictPrivilege from 'views/restrictPrivilege';
import ProfileCog from '../assets/icons/InfoCustom.svg?react';
import { SiderRoutes } from './types';

export const essentialEightTabs: Array<SiderRoutes> = [
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
    path: 'reports',
    component: Report,
    label: 'Logs',
    id: 'logs',
    icon: <Icon className="icon active-icon" component={ProfileCog} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'app-whitelisting',
    component: AppWhiteListing,
    label: 'App Whitelisting',
    id: 'App Whitelisting',
    icon: <Icon className="icon active-icon" component={Monitor} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'patch-app',
    component: PatchApplication,
    label: 'Patch App',
    id: 'Patch App',
    icon: <Icon className="icon active-icon" component={Secure} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'ms-macro',
    component: MacroMSOffice,
    label: 'Macro MS Office',
    id: 'Macro MS Office',
    icon: <Icon className="icon active-icon" component={Microsoft} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'app-hardening',
    component: AppHardening,
    label: 'App Hardening',
    id: 'App Hardening',
    icon: <Icon className="icon active-icon" component={Lock} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'mfa',
    component: MFA,
    label: 'MFA',
    id: 'MFA',
    icon: <Icon className="icon active-icon" component={Fingerprint} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'patch-os',
    component: PatchOS,
    label: 'Patch OS',
    id: 'Patch OS',
    icon: <Icon className="icon active-icon" component={Check} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'restrict-privilege',
    component: RestrictPrivilege,
    label: 'Restrict Priviledges',
    id: 'Restrict Priviledges',
    icon: <Icon className="icon active-icon" component={PrivilegeLogo} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'daily-backup',
    component: DailyBackups,
    label: 'Daily Backups',
    id: 'Daily Backups',
    icon: <Icon className="icon active-icon" component={Backup} />,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  }
];

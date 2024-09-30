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
    icon: DashboardCustom,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'reports',
    component: Report,
    label: 'Logs',
    id: 'logs',
    icon: ProfileCog,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'app-whitelisting',
    component: AppWhiteListing,
    label: 'App Whitelisting',
    id: 'App Whitelisting',
    icon: Monitor,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'patch-app',
    component: PatchApplication,
    label: 'Patch App',
    id: 'Patch App',
    icon: Secure,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'ms-macro',
    component: MacroMSOffice,
    label: 'Macro MS Office',
    id: 'Macro MS Office',
    icon: Microsoft,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'app-hardening',
    component: AppHardening,
    label: 'App Hardening',
    id: 'App Hardening',
    icon: Lock,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'mfa',
    component: MFA,
    label: 'MFA',
    id: 'MFA',
    icon: Fingerprint,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'patch-os',
    component: PatchOS,
    label: 'Patch OS',
    id: 'Patch OS',
    icon: Check,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'restrict-privilege',
    component: RestrictPrivilege,
    label: 'Restrict Priviledges',
    id: 'Restrict Priviledges',
    icon: PrivilegeLogo,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'daily-backup',
    component: DailyBackups,
    label: 'Daily Backups',
    id: 'Daily Backups',
    icon: Backup,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  }
];

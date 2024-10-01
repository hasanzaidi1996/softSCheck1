import getItem from './getMenuItem';
import { Link } from 'react-router-dom';
import Icon from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { UserRoles } from 'types';
import Report from 'views/report';
import AppWhiteListing from 'views/appWhiteListing';
import { SiderRoutes } from './types';
import { ReactComponent as ProfileCog } from '../assets/icons/InfoCustom.svg';
import { Check, Fingerprint, Lock, Microsoft, Monitor, Secure } from 'assets/icons';

/**
 * Icons
 */

type MenuItem = Required<MenuProps>['items'][number];

export const siderClientRoutes: Array<SiderRoutes> = [
  {
    path: 'reports',
    component: <Report />,
    label: 'Reports',
    id: 'reports',
    index: true, // index will create it first route when navigating
    icon: ProfileCog,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'app-whitelisting',
    component: <AppWhiteListing />,
    label: 'App Whitelisting',
    id: 'App Whitelisting',
    icon: Monitor,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  },
  {
    path: 'patch-app',
    component: <></>,
    label: 'Patch App',
    id: 'App Whitelisting',
    icon: Secure,
    authenticatedUsers: [UserRoles.Client],
    disabled: true
  },
  {
    path: 'ms-macro',
    component: <></>,
    label: 'Macro MS Office',
    id: 'Macro MS Office',
    icon: Microsoft,
    authenticatedUsers: [UserRoles.Client],
    disabled: true
  },
  {
    path: 'app-hardening',
    component: <></>,
    label: 'App Hardening',
    id: 'App Hardening',
    icon: Lock,
    authenticatedUsers: [UserRoles.Client],
    disabled: true
  },
  {
    path: 'mfa',
    component: <></>,
    label: 'MFA',
    id: 'MFA',
    icon: Fingerprint,
    authenticatedUsers: [UserRoles.Client],
    disabled: true
  },
  {
    path: 'patch-os',
    component: <></>,
    label: 'Patch OS',
    id: 'Patch OS',
    icon: Check,
    authenticatedUsers: [UserRoles.Client],
    disabled: true
  }
];

/**
 * SVG css is in routesMenu.css
 */
export const siderClientMenu: MenuItem[] = siderClientRoutes.map((route, index) => {
  // index will have default route so must be replaced
  return getItem(
    <Link id={route.id} to={`/user/${route.index ? '' : route.path}`}>
      {route.label}
    </Link>,
    index.toString(),
    <Icon className="icon active-icon" component={route.icon}></Icon>,
    null,
    undefined,
    route.disabled
  );
});

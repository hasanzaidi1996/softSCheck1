import Icon, { CommentOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import getItem from './getMenuItem';

import { DashboardCustom, Fingerprint } from 'assets/icons';
import { UserRoles } from 'types';

import AddOns from 'views/addons';
import Comments from 'views/comments';
import AppDashboard from 'views/dashboard';
import Subscriptions from 'views/subscriptions';
import Users from 'views/users';
import { essentialEightTabs } from './essentialEightTabs';
import { SiderRoutes } from './types';

/**
 * Icons
 */

type MenuItem = Required<MenuProps>['items'][number];

export const siderMsspRoutes: Array<SiderRoutes> = [
  {
    path: 'users',
    component: Users,
    label: 'Users',
    id: 'users',
    index: true,
    icon: DashboardCustom,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  },
  {
    path: 'comments',
    component: Comments,
    label: 'Comments',
    id: 'comments',
    // index: true,
    icon: CommentOutlined as any,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  },
  {
    path: 'subscriptions',
    component: Subscriptions,
    label: 'Subscriptions',
    id: 'subscriptions',
    // index: true,
    icon: Fingerprint as any,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  },
  {
    path: 'addons',
    component: AddOns,
    label: 'Add Ons',
    id: 'addons',
    // index: true,
    icon: Fingerprint as any,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  }
];

export const siderClientRoutes: Array<SiderRoutes> = [
  // {
  //   path: 'dashboard',
  //   component: AppDashboard,
  //   label: 'Dashboard',
  //   id: 'dashboard',
  //   index: true, // index will create it first route when navigating to /
  //   icon: DashboardCustom,
  //   authenticatedUsers: [UserRoles.Client],
  //   disabled: false
  // },
  {
    path: 'essential-eight',
    component: AppDashboard,
    label: 'Essential Eight',
    id: 'essential-eight',
    // index: true, // index will create it first route when navigating to /
    icon: DashboardCustom,
    authenticatedUsers: [UserRoles.Client],
    disabled: false,
    children: essentialEightTabs
  },
  {
    path: 'iso',
    component: AppDashboard,
    label: 'ISO 70001',
    id: 'iso',
    // index: true, // index will create it first route when navigating to /
    icon: DashboardCustom,
    authenticatedUsers: [UserRoles.Client],
    disabled: false
  }
];

/**
 * SVG css is in routesMenu.css
 */
export const siderClientMenu: MenuItem[] = siderClientRoutes.map((route, index) => {
  // index will have default route so must be replaced

  const childMenu = route.children
    ?.filter((child) => {
      return !child.index;
    })
    .map((child) => {
      return getItem(
        <Link className={`${child.path}`} id={child.id} to={`/user/${route.path}/${child.path}`}>
          {child.label}
        </Link>,
        `${child.path}-${child.id}`,
        <Icon className="icon active-icon" component={child.icon}></Icon>
      );
    });
  return getItem(
    <Link id={route.id} to={`/user/${route.index ? '' : route.path}`}>
      {route.label}
    </Link>,
    index.toString(),
    <Icon className="icon active-icon" component={route.icon}></Icon>,
    null,
    undefined,
    route.disabled,
    childMenu
  );
});

export const siderMsspMenu: MenuItem[] = siderMsspRoutes.map((route, index) => {
  // index will have default route so must be replaced
  return getItem(
    <Link id={route.id} to={`/mssp/${route.index ? '' : route.path}`}>
      {route.label}
    </Link>,
    index.toString(),
    <Icon className="icon active-icon" component={route.icon}></Icon>,
    null,
    undefined,
    route.disabled
  );
});

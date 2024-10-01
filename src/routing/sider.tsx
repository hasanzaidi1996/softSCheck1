import Icon, { CommentOutlined, CopyOutlined, SettingOutlined } from '@ant-design/icons';
import { Image, type MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import getItem from './getMenuItem';

import { DashboardCustom, Essential8Png, Fingerprint, ISOIcon, NISTIcon } from 'assets/icons';
import { UserRoles } from 'types';

import AddOns from 'views/addons';
import Comments from 'views/comments';
import AppDashboard from 'views/dashboard';
import Subscriptions from 'views/subscriptions';
import Users from 'views/users';

import Settings from 'views/settings';
import { essentialEightTabs } from './essentialEightTabs';
import { isoTabs } from './isoTabs';
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
    icon: <Icon className="icon active-icon" component={DashboardCustom} />,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  },
  {
    path: 'comments',
    component: Comments,
    label: 'Comments',
    id: 'comments',
    // index: true,
    icon: <CommentOutlined />,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  },
  {
    path: 'subscriptions',
    component: Subscriptions,
    label: 'Subscriptions',
    id: 'subscriptions',
    // index: true,
    icon: <Icon className="icon active-icon" component={Fingerprint} />,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  },
  {
    path: 'addons',
    component: AddOns,
    label: 'Add Ons',
    id: 'addons',
    // index: true,
    icon: CopyOutlined as any,
    authenticatedUsers: [UserRoles.Mssp],
    disabled: false
  },
  {
    path: 'settings',
    component: Settings,
    label: 'Settings',
    id: 'settings',
    // index: true,
    icon: <SettingOutlined />,
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
  //   icon: <Icon className="icon active-icon" component={DashboardCustom} />,
  //   authenticatedUsers: [UserRoles.Client],
  //   disabled: false
  // },
  {
    path: 'essential-eight',
    component: AppDashboard,
    label: 'Essential Eight',
    id: 'essential-eight',
    // index: true, // index will create it first route when navigating to /
    icon: (
      <Icon
        className="icon active-icon"
        component={() => {
          return <Image src={Essential8Png} style={{ width: 32, borderRadius: 20 }} />;
        }}
      />
    ),
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
    icon: (
      <Icon
        className="icon active-icon"
        component={() => {
          return <Image src={ISOIcon} style={{ width: 37 }} />;
        }}
      />
    ),
    authenticatedUsers: [UserRoles.Client],
    disabled: false,
    children: isoTabs
  },
  {
    path: 'nist',
    component: AppDashboard,
    label: 'NIST',
    id: 'nist',
    // index: true, // index will create it first route when navigating to /
    icon: (
      <Icon
        className="icon active-icon"
        component={() => {
          return <Image src={NISTIcon} style={{ width: 37, borderRadius: 20 }} />;
        }}
      />
    ),
    authenticatedUsers: [UserRoles.Client],
    disabled: true
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
        child.icon
      );
    });
  return getItem(
    <Link id={route.id} to={`/user/${route.index ? '' : route.path}`}>
      {route.label}
    </Link>,
    index.toString(),
    route.icon,
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
    route.icon,
    null,
    undefined,
    route.disabled
  );
});

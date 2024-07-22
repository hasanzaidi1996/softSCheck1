import getItem from './getMenuItem';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

// redux
import store from 'appRedux/store';
import { logout } from 'appRedux/actions/authAction';

type MenuItem = Required<MenuProps>['items'][number];
/**
 *
 * @returns {MenuItem[]} menu items
 */
export const navAccountMenu: () => MenuItem[] = () => {
  const path = '/user/account';

  return [
    getItem(
      <NavLink to={path}>
        <Button icon={<UserOutlined />} block>
          Profile
        </Button>
      </NavLink>,
      '0'
    ),
    getItem(
      <Button
        icon={<LogoutOutlined />}
        onClick={() => {
          store.dispatch(logout());
        }}
        block>
        Logout
      </Button>,
      '3'
    )
  ];
};

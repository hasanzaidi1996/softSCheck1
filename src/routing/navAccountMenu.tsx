import getItem from './getMenuItem';
import { LogoutOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button } from 'antd';

// redux
import store from 'appRedux/store';
import { logout } from 'appRedux/actions/authAction';

type MenuItem = Required<MenuProps>['items'][number];
/**
 *
 * @returns {MenuItem[]} menu items
 */
export const navAccountMenu: () => MenuItem[] = () => {
  return [
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

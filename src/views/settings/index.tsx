import { KeyOutlined, SettingFilled } from '@ant-design/icons';
import { Segmented } from 'antd';
import React from 'react';
import SettingsForm from './SettingsForm';
import ChangePassword from './ChangePassword';

/**
 * Settings page
 *
 * This page contains settings for the entire application.
 *
 * @return {React.ReactElement} The component
 */
const Settngs = () => {
  const items = [
    {
      name: 'General Settings',
      value: '1',
      icon: SettingFilled
    },
    {
      name: 'Manage Password',
      value: '2',
      icon: KeyOutlined
    }
  ];

  const [active, setActive] = React.useState('1');

  return (
    <div className="container">
      <div className="space-y-4">
        <Segmented
          className="bg-none bg-transparent"
          onChange={(e) => {
            return setActive(e as any);
          }}
          options={items.map((item) => {
            return {
              value: item.value,
              icon: <item.icon />,
              label: item.name
            };
          })}
        />
        <div>{active === '1' ? <SettingsForm /> : <ChangePassword />}</div>
      </div>
    </div>
  );
};

export default Settngs;

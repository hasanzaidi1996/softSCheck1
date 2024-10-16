import { ApiFilled, KeyOutlined, SettingFilled } from '@ant-design/icons';
import { Segmented } from 'antd';
import React from 'react';
import SettingsForm from './SettingsForm';
import ChangePassword from './ChangePassword';
import APIKey from './APIKey';

/**
 * Settings page
 *
 * This page contains settings for the entire application.
 *
 * @returns {React.ReactElement} The component
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
    },
    {
      name: 'Manage API',
      value: '3',
      icon: ApiFilled
    }
  ];

  const [active, setActive] = React.useState('1');

  return (
    <div className="container">
      <div className="space-y-4">
        <Segmented
          className="bg-none bg-transparent rounded-lg"
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
        <div>
          {active === '1' ? <SettingsForm /> : active === '2' ? <ChangePassword /> : <APIKey />}
        </div>
      </div>
    </div>
  );
};

export default Settngs;

import React from 'react';
import IMenuProps from './types';
import { Menu } from 'antd';

/**
 * Antd Customized Menu component for routes
 *
 * @param {IMenuProps} props - Properties of the Menu component
 * @returns {React.FC} Routes Menu component
 */
const CustomMenu: React.FC<IMenuProps> = (props: IMenuProps) => {
  const { className, items, ...rest } = props;
  const customClasses = props.className || '';
  return <Menu className={`custom-menu ${customClasses}`} items={props.items} {...rest} />;
};

export default CustomMenu;

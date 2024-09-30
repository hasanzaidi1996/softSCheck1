import type { MenuProps } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

/**
 * Template to produce MenuItem for Menu component
 *
 * @param {React.ReactNode} label - label to display for the menu item
 * @param {React.Key | null} key - key for menu item
 * @param {React.ReactNode} icon - icon to display for the menu item
 * @param {string | null} id - id of the menu item
 * @param {string} type - type of the menu item
 * @param {boolean} disabled - whether the menu item is disabled
 * @param {MenuItem[]} children - children to show
 * @returns {MenuItem} returns MenuItem object
 */
export default function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode | null,
  id?: string | null,
  type?: 'group' | 'disabled',
  disabled?: boolean,
  children?: MenuItem[]
): MenuItem {
  return {
    id: id,
    key: key,
    icon: icon,
    label: label,
    type: type,
    disabled: disabled,
    children: children
  } as MenuItem;
}

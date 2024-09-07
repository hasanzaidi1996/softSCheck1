/* eslint-disable no-magic-numbers */
import { CSSProperties } from 'react';

const defaultColor = '#9ea4a7';

interface IAlertTypes {
  [key: string]: CSSProperties;
}

interface IColorType {
  [key: string]: string;
}

const color: IColorType = {
  completed: 'green',
  pending: 'blue',
  failed: 'red',
  'level 0': '#780000',
  'level 1': '#fd8c00',
  'level 2': '#fdc500',
  'level 3': '#00ac46'
};

/**
 *
 * @param {string} value value to get color of
 * @returns {string} color specifc to value
 */
export const getColor = (value?: string): string => {
  if (!value) {
    return defaultColor;
  }
  return color[value.toLowerCase()];
};

// alert styles
const getAlertColors: IAlertTypes = {
  success: {
    color: 'rgba(0, 0, 0, 0.65)',
    border: '1px solid #b7eb8f',
    backgroundColor: '#f6ffed'
  },
  warning: {
    color: 'rgba(0, 0, 0, 0.65)',
    border: '1px solid #ffe58f',
    backgroundColor: '#fffbe6'
  },
  error: {
    color: 'rgba(0, 0, 0, 0.65)',
    border: '1px solid #ffa39e',
    backgroundColor: '#fff1f0'
  },
  info: {
    color: 'rgba(0, 0, 0, 0.65)',
    border: '1px solid #91d5ff',
    backgroundColor: '#e6f7ff'
  }
};

/**
 * Color used in alert here
 *
 * @param {string} type - color type
 * @returns {CSSProperties} color - color value
 */
export const getAlertStyle = (type: string): CSSProperties => {
  if (type === 'danger') {
    return getAlertColors.error;
  }
  return getAlertColors[type];
};

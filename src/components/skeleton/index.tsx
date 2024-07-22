/* eslint-disable no-magic-numbers */
import React from 'react';
import { Skeleton, Space } from 'antd';
import { ISidebarSkeletonProps } from './types';

/**
 * sidebar style skeleton
 *
 * @param {ISidebarSkeletonProps} props - for showing number of list items in skeleton
 * @returns {React.FC} skeleton component
 */
export const SidebarSkeleton: React.FC<ISidebarSkeletonProps> = (props: ISidebarSkeletonProps) => {
  const rows: Array<React.ReactElement> = [];

  for (let i = 0; i < props.count; i++) {
    rows.push(
      <>
        <Space key={i}>
          <Skeleton.Avatar active={true} />
          <Skeleton.Input active={true} />
        </Space>
      </>
    );
  }
  return (
    <>
      {props.loading ? (
        <Space size={10} direction={'vertical'} align={'center'}>
          {rows.map((val: React.ReactElement) => {
            return val;
          })}
        </Space>
      ) : (
        props.children
      )}
    </>
  );
};

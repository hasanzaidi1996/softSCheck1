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

/**
 * User Card skeleton
 *
 * @returns {React.FC} skeleton component
 */
export const UserCardSekeleton = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start h-[25rem] shadow-xl mt-20 rounded-lg p-4 ring-1 ring-gray-400">
        <div>
          <Skeleton.Avatar size={100} />
        </div>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="mt-5 flex flex-col gap-2 w-full">
            <div className="flex items-center justify-center gap-1 text-center">
              <Skeleton.Input size="small" />
              <Skeleton.Input size="small" />
            </div>
            <div className="flex items-center justify-center gap-1 text-sm">
              <Skeleton.Input size="large" />
            </div>
            <div className="flex items-center justify-center gap-1 text-sm">
              <Skeleton.Input size="large" />
            </div>
            <div className="flex items-center justify-center gap-1 text-sm">
              <Skeleton.Input size="large" />
            </div>
            <div className="flex items-center justify-center gap-1 text-sm">
              <Skeleton.Input size="large" />
            </div>
            <div className="flex items-center justify-center gap-1 text-sm">
              <Skeleton.Button size="small" />
              <Skeleton.Button size="small" />
              <Skeleton.Button size="small" />
              <Skeleton.Button size="small" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

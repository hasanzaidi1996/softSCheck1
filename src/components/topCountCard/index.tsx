import React from 'react';
import { ICountCard } from './types';
import { Card, Statistic } from 'antd';

/**
 * Top Statistic Card to show count
 *
 * @param {ICountCard} props properties
 * @returns {React.FC}
 */
const TopCountCard = (props: ICountCard) => {
  return (
    <Card>
      <Statistic {...props} />
    </Card>
  );
};

export default TopCountCard;

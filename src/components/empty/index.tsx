import React from 'react';
import { Empty, Typography } from 'antd';
import { IChartNoDataPlaceholderProps } from './types';

const { Title } = Typography;
/**
 *
 * @param {IChartNoDataPlaceholderProps} props - Properties
 * @returns {React.FC} - returns ChartNoDataPlaceholder
 */
export const ChartPlaceholder: React.FC<IChartNoDataPlaceholderProps> = (
  props: IChartNoDataPlaceholderProps
) => {
  const { containerClassName, height, width, ...rest } = props;
  return (
    <div
      className={`chart-parent-container auth-loading ${containerClassName}`}
      style={{
        height: height,
        width: width
      }}>
      <Empty {...rest} />
    </div>
  );
};

ChartPlaceholder.defaultProps = {
  description: <Title level={4}>No Data Available</Title>,
  image: Empty.PRESENTED_IMAGE_DEFAULT
};

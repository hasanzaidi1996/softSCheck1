import React from 'react';
import { Bar } from '@ant-design/plots';
import { Card, Skeleton } from 'antd';
import { NoDataPlaceHolder } from 'components';
import { IBarChartProps } from './types';
import { DotChartOutlined } from '@ant-design/icons';

/**
 * Render Chart
 *
 * @param {IBarChartProps} props data
 * @returns {React.FC} chart to render
 */
const BarChart: React.FC<IBarChartProps> = (props: IBarChartProps) => {
  const chartSize = 300;

  const config = {
    data: props.data,
    xField: 'count',
    yField: 'label',
    seriesField: 'label',
    color: props.color
  };
  return (
    <Card title={props.title}>
      {props.loading ? (
        <Skeleton.Node active={true} style={{ height: chartSize, width: 500 }}>
          <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
        </Skeleton.Node>
      ) : Array.isArray(props.data) && props.data.length > 0 ? (
        <Bar {...config} />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

export default BarChart;

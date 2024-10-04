import { DotChartOutlined } from '@ant-design/icons';
import { Bar } from '@ant-design/plots';
import { Card, Skeleton } from 'antd';
import { NoDataPlaceHolder } from 'components';
import React from 'react';
import { IStackBarChartProps } from './types';

/**
 * Render Chart
 *
 * @param {IStackBarChartProps} props data
 * @returns {React.FC} chart to render
 */
const StackedBarChart: React.FC<IStackBarChartProps> = (props: IStackBarChartProps) => {
  const chartSize = 300;

  const config = {
    data: props.data,
    xField: 'label',
    yField: 'count',
    colorField: 'category',
    stack: true,
    height: props.height
  };
  return (
    <Card title={props.title} style={{ borderRadius: 10, height: '100%' }}>
      {props.loading ? (
        <Skeleton.Node active={true} style={{ height: chartSize, width: 500 }}>
          <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
        </Skeleton.Node>
      ) : Array.isArray(props.data) && props.data.length > 0 ? (
        <Bar {...config} scale={props.palatte ? { color: { palette: props.palatte } } : {}} />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

export default StackedBarChart;

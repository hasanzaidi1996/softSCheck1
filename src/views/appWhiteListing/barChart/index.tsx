import React from 'react';
import { Bar } from '@ant-design/plots';
import { Card } from 'antd';
import { NoDataPlaceHolder } from 'components';
import { IBarChartProps } from './types';

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
      {Array.isArray(props.data) && props.data.length > 0 ? (
        <Bar {...config} />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

export default BarChart;

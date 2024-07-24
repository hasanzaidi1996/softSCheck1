import React from 'react';
import { Pie } from '@ant-design/plots';
import { IPieChartProps } from './types';
import { Card } from 'antd';
import { NoDataPlaceHolder } from 'components';

/**
 * Render Chart
 *
 * @param {IPieChartProps} props data
 * @returns {React.FC} chart to render
 */
const PieChart: React.FC<IPieChartProps> = (props: IPieChartProps) => {
  const chartSize = 300;

  const config = {
    data: props.data,
    angleField: 'value',
    colorField: 'type',
    height: chartSize,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold'
      }
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5
      }
    },
    color: props.color
  };
  return (
    <Card title={props.title}>
      {Array.isArray(props.data) && props.data.length > 0 ? (
        <Pie {...config} />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

export default PieChart;

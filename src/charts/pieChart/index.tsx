import { DotChartOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/plots';
import { Card, Skeleton } from 'antd';
import { NoDataPlaceHolder } from 'components';
import React from 'react';
import { IPieChartProps } from './types';

/**
 * Render Chart
 *
 * @param {IPieChartProps} props data
 * @returns {React.FC} chart to render
 */
const PieChart: React.FC<IPieChartProps> = (props: IPieChartProps) => {
  const { data, loading, palatte, title, ...rest } = props;

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
    scale: { color: { palette: props.palatte } }
  };
  return (
    <Card title={props.title}>
      {props.loading ? (
        <Skeleton.Node active={true} style={{ height: chartSize, width: 500 }}>
          <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
        </Skeleton.Node>
      ) : Array.isArray(props.data) && props.data.length > 0 ? (
        <Pie {...config} {...rest} />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

export default PieChart;

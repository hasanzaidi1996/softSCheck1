import { DotChartOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import { Card, Skeleton } from 'antd';
import { NoDataPlaceHolder } from 'components';
import React from 'react';
import { ILineChartProps } from './types';

/**
 * Render Chart
 *
 * @param {ILineChartProps} props data
 * @returns {React.FC} chart to render
 */
const LineChart: React.FC<ILineChartProps> = (props: ILineChartProps) => {
  const chartSize = 300;

  const config = {
    data: props.data,
    xField: 'xAxis',
    yField: 'yAxis',
    scale: { color: { palette: props.palatte } },
    point: {
      shapeField: 'square',
      sizeField: 4
    },
    interaction: {
      tooltip: {
        marker: false
      }
    },
    style: {
      lineWidth: 2
    },
    legend: false
  };
  return (
    <Card title={props.title}>
      {props.loading ? (
        <Skeleton.Node active={true} style={{ height: chartSize, width: 500 }}>
          <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
        </Skeleton.Node>
      ) : Array.isArray(props.data) && props.data.length > 0 ? (
        <Line {...config} height={chartSize} />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

export default LineChart;

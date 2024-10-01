import { DotChartOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/plots';
import { Card, Skeleton } from 'antd';
import { NoDataPlaceHolder } from 'components';
import React from 'react';
import { IComplianceCount } from './types';

/**
 * Rennder Compliance Count Graph
 *
 * @param {IComplianceCount} props props
 * @returns {React.FC} component to render
 */
export const ComplianceCount: React.FC<IComplianceCount> = (props: IComplianceCount) => {
  const chartSize = 300;

  const data = [
    { day: '0', value: 4 },
    { day: '4', value: 1 },
    { day: '5', value: 3 },
    { day: '6', value: 4 },
    { day: '7', value: 3 },

    { day: '10', value: 4 },
    { day: '11', value: 3 },
    { day: '12', value: 2 },
    { day: '13', value: 1 },
    { day: '14', value: 3 },
    { day: '15', value: 2 },

    { day: '21', value: 1 },
    { day: '22', value: 2 },
    { day: '23', value: 2 },
    { day: '24', value: 1 },
    { day: '27', value: 4 },
    { day: '28', value: 1 },
    { day: '29', value: 1 },
    { day: '31', value: 1 }
  ];

  const config = {
    data: data,
    xField: 'day',
    yField: 'value',
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
    }
  };

  return (
    <Card title={'Compliance Count By Day'}>
      {props.loading ? (
        <Skeleton.Node active={true} style={{ height: chartSize, width: 500 }}>
          <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
        </Skeleton.Node>
      ) : props.reportId ? (
        <Line {...config} />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

import { DotChartOutlined } from '@ant-design/icons';
import { Column } from '@ant-design/plots';
import { Card, Skeleton } from 'antd';
import { NoDataPlaceHolder } from 'components';
import React from 'react';
import { IColumnChartProps } from './types';

/**
 *  Column graph render
 *
 * @param {IColumnChartProps} props proper for column chart
 * @returns {React.FC}
 */
const ColumnChart: React.FC<IColumnChartProps> = (props: IColumnChartProps) => {
  const { loading, title, palatte, ...rest } = props;
  const chartSize = 300;
  return (
    <Card title={title}>
      {loading ? (
        <Skeleton.Node active={true} style={{ height: chartSize, width: 500 }}>
          <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
        </Skeleton.Node>
      ) : Array.isArray(props.data) && props.data.length > 0 ? (
        <Column
          height={chartSize}
          {...rest}
          scale={palatte ? { color: { palette: palatte } } : {}}
        />
      ) : (
        <NoDataPlaceHolder.ChartPlaceholder height={chartSize} />
      )}
    </Card>
  );
};

export default ColumnChart;

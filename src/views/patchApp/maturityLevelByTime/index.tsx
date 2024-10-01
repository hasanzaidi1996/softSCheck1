import ColumnChart from 'charts/columChart';
import React from 'react';

/**
 * Remder graph to show patch status for graph
 * in percentage
 *
 * @returns {React.FC} component to render
 */
const MaturityLevelByTime: React.FC = () => {
  const data = [
    { month: 'April', maturityLevel: '3', value: 9 },
    { month: 'August', maturityLevel: '1', value: 7 },
    { month: 'February', maturityLevel: '4', value: 10 },
    { month: 'March', maturityLevel: '3', value: 4 },
    { month: 'January', maturityLevel: '2', value: 5 },
    { month: 'May', maturityLevel: '4', value: 8 },
    { month: 'June', maturityLevel: '2', value: 1 },
    { month: 'August', maturityLevel: '3', value: 6 },
    { month: 'January', maturityLevel: '1', value: 2 },
    { month: 'September', maturityLevel: '2', value: 3 }
  ];

  const config = {
    data: data,
    xField: 'month',
    yField: 'value',
    seriesField: 'maturityLevel',
    stack: true,
    colorField: 'maturityLevel'
  };

  return (
    <ColumnChart loading={false} palatte="brBG" title="Count of Test Result by Month" {...config} />
  );
};

export default MaturityLevelByTime;

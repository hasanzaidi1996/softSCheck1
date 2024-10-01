import { LineChart } from 'charts';
import React from 'react';

/**
 * Remder graph to show patch status for graph
 * in percentage
 *
 * @returns {React.FC} component to render
 */
const TestResultCountGraph: React.FC = () => {
  const data = [
    { xAxis: 'January', yAxis: 5 },
    { xAxis: 'February', yAxis: 8 },
    { xAxis: 'March', yAxis: 2 },
    { xAxis: 'April', yAxis: 1 },
    { xAxis: 'May', yAxis: 10 },
    { xAxis: 'June', yAxis: 3 },
    { xAxis: 'July', yAxis: 7 },
    { xAxis: 'August', yAxis: 4 },
    { xAxis: 'September', yAxis: 9 },
    { xAxis: 'October', yAxis: 0 },
    { xAxis: 'November', yAxis: 6 },
    { xAxis: 'December', yAxis: 1 }
  ];

  return (
    <LineChart data={data} loading={false} palatte="accent" title="Count of Test Result by Month" />
  );
};

export default TestResultCountGraph;

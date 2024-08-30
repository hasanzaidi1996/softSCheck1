import { LineChart } from 'charts';
import React from 'react';

/**
 *
 * @returns {React.FC}
 */
const ComplianceStatus: React.FC = () => {
  const data = [
    { xAxis: 'January', yAxis: 5 },
    { xAxis: 'May', yAxis: 3 },
    { xAxis: 'September', yAxis: 10 },
    { xAxis: 'March', yAxis: 2 },
    { xAxis: 'July', yAxis: 7 },
    { xAxis: 'October', yAxis: 5 },
    { xAxis: 'April', yAxis: 8 },
    { xAxis: 'February', yAxis: 6 },
    { xAxis: 'November', yAxis: 1 },
    { xAxis: 'August', yAxis: 9 }
  ];
  return (
    <LineChart data={data} loading={false} palatte="paired" title="Compliance Status By Year" />
  );
};

export default ComplianceStatus;

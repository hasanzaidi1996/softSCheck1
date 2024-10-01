import { PieChart } from 'charts';
import React from 'react';

/**
 * Remder graph to show patch status for graph
 * in percentage
 *
 * @returns {React.FC} component to render
 */
const PatchStatusGraph: React.FC = () => {
  const data = [
    {
      type: 'Applied',
      value: 35
    },
    {
      type: 'Other',
      value: 20
    }
  ];

  return (
    <PieChart data={data} palatte="tableau10" loading={false} title={'PATCH STATUS PERCENTAGE'} />
  );
};

export default PatchStatusGraph;

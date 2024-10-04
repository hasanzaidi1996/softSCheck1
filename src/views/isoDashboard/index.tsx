import { Tiny } from '@ant-design/plots';
import { Button } from 'antd';
import React, { useState } from 'react';

/**
 * ISO Dashboard page
 *
 * @returns {React.ReactElement} ISO Dashboard page
 */
const ISODashboard = () => {
  const controls = [
    {
      name: 'All',
      totalControls: 83,
      complaintControls: 79
    },
    {
      name: 'Organizational',
      totalControls: 32,
      complaintControls: 31
    },
    {
      name: 'People',
      totalControls: 8,
      complaintControls: 7
    },
    {
      name: 'Physical',
      totalControls: 13,
      complaintControls: 12
    },
    {
      name: 'Technical',
      totalControls: 30,
      complaintControls: 29
    }
  ];
  const [activeControl, setActiveControl] = useState('All');
  const percent = (
    ((controls.find((control) => control.name === activeControl)?.complaintControls ?? 0) /
      (controls.find((control) => control.name === activeControl)?.totalControls ?? 1)) *
    100
  ).toPrecision(4);
  const config = {
    percent: parseInt(percent) * 0.01,
    width: 250,
    height: 250,
    autoFit: false,
    innerRadius: 0.8,

    color: ['#E8EFF5', '#66AFF4'],
    annotations: [
      {
        type: 'text',
        style: {
          text: `${percent}%`,
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 50,
          fontStyle: 'bold'
        }
      }
    ]
  };
  return (
    <div className="container p-8 rounded-lg bg-tertiary">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 items-center justify-center">
        <div className="flex flex-col lg:items-end justify-center gap-4 ">
          <div className="shadow-lg min-w-60 p-4 rounded-lg flex flex-col gap-2 ring-1 ring-secondary">
            <h1 className="text-lg font-semibold">Select Control</h1>
            {controls.map((control, index) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <Button
                  className="w-full rounded-sm"
                  type={activeControl === control.name ? 'primary' : 'default'}
                  onClick={() => {
                    return setActiveControl(control.name);
                  }}>
                  {control.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg ring-1 ring-secondary p-4">
          <h1 className="text-lg font-semibold p-1 ring-b-1">Overall Complaince Score</h1>
          <Tiny.Ring {...config} />
        </div>
        <div className="flex flex-col lg:items-start justify-center gap-4">
          <div className="min-w-60 rounded-lg bg-primary p-2 flex flex-col items-center justify-center gap-2 ring-1 ring-secondary text-center">
            <p className="text-5xl font-semibold">
              {controls.find((control) => control.name === activeControl)?.totalControls}
            </p>
            <p className="text-nowrap">Total Controls</p>
          </div>
          <div className="min-w-60 rounded-lg bg-primary p-2 flex flex-col items-center justify-center gap-2 ring-1 ring-secondary text-center">
            <p className="text-5xl font-semibold">
              {controls.find((control) => control.name === activeControl)?.complaintControls}
            </p>
            <p className="text-nowrap">Complaint Controls</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISODashboard;

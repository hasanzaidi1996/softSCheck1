import { Tiny } from '@ant-design/plots';
import { Button } from 'antd';
import StackedBarChart from 'charts/stackedBarChart';
import React, { useState } from 'react';
import {
  controls,
  organizationalData,
  peopleData,
  physicalData,
  technicalData
} from './dashboardData';

/**
 * ISO Dashboard page
 *
 * @returns {React.ReactElement} ISO Dashboard page
 */
const ISODashboard = () => {
  const [activeControl, setActiveControl] = useState('All');
  const percent = (
    ((controls.find((control) => control.name === activeControl)?.compliantControls ?? 0) /
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
      <h1 className="text-xl font-semibold p-1 ring-b-1 mb-4">Dashboard ISO 70001</h1>

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
          <h1 className="text-lg font-semibold p-1 ring-b-1 mb-4">Overall Complaince Score</h1>
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
              {controls.find((control) => control.name === activeControl)?.compliantControls}
            </p>
            <p className="text-nowrap">Compliant Controls</p>
          </div>
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h1 className="text-xl font-semibold p-1 ring-b-1">Overall Complaince Score</h1>

        <div
          className={`grid gap-4  ${
            activeControl === 'All' ? 'lg:grid-cols-2 grid-cols-1' : 'grid-cols-1'
          }`}>
          {(activeControl === 'All' || activeControl === 'Organizational') && (
            <div
              className="cursor-pointer"
              onClick={() => {
                if (activeControl === 'All') {
                  setActiveControl('Organizational');
                } else {
                  setActiveControl('All');
                }
              }}>
              <StackedBarChart
                data={organizationalData}
                loading={false}
                palatte="viridis"
                title="Organizational Controls"
                height={activeControl === 'All' ? 150 : 300}
              />
            </div>
          )}

          {(activeControl === 'All' || activeControl === 'People') && (
            <div
              className="cursor-pointer"
              onClick={() => {
                if (activeControl === 'All') {
                  setActiveControl('Organizational');
                } else {
                  setActiveControl('All');
                }
              }}>
              <StackedBarChart
                data={peopleData}
                loading={false}
                palatte="viridis"
                title="People Controls"
                height={activeControl === 'All' ? 150 : 300}
              />
            </div>
          )}
          {(activeControl === 'All' || activeControl === 'Physical') && (
            <div
              className="cursor-pointer"
              onClick={() => {
                if (activeControl === 'All') {
                  setActiveControl('Organizational');
                } else {
                  setActiveControl('All');
                }
              }}>
              <StackedBarChart
                data={physicalData}
                loading={false}
                palatte="viridis"
                title="Physical Controls"
                height={activeControl === 'All' ? 150 : 300}
              />
            </div>
          )}
          {(activeControl === 'All' || activeControl === 'Technical') && (
            <div
              className="cursor-pointer"
              onClick={() => {
                if (activeControl === 'All') {
                  setActiveControl('Organizational');
                } else {
                  setActiveControl('All');
                }
              }}>
              <StackedBarChart
                data={technicalData}
                loading={false}
                palatte="viridis"
                title="Technical Controls"
                height={activeControl === 'All' ? 150 : 300}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ISODashboard;

import { Col, Row } from 'antd';
import { BarChart, LineChart, PieChart } from 'charts';
import React from 'react';

/**
 * Componnent to render
 *
 * @returns {React.FC} component to render
 */
const DailyBackups: React.FC = () => {
  const backupStatus = [
    {
      type: 'Completed',
      value: 24
    },
    {
      type: 'Not Completed',
      value: 31
    }
  ];

  const complianceStatus = [
    { xAxis: 'January', yAxis: 9 },
    { xAxis: 'February', yAxis: 2 },
    { xAxis: 'March', yAxis: 2 },
    { xAxis: 'April', yAxis: 3 },
    { xAxis: 'May', yAxis: 5 },
    { xAxis: 'June', yAxis: 6 },
    { xAxis: 'July', yAxis: 9 },
    { xAxis: 'August', yAxis: 3 },
    { xAxis: 'September', yAxis: 3 },
    { xAxis: 'October', yAxis: 2 },
    { xAxis: 'November', yAxis: 4 },
    { xAxis: 'December', yAxis: 7 }
  ];

  const OSByVendor = [
    { label: 'Full', count: 25 },
    { label: 'Incremental', count: 22 },
    { label: 'Differential', count: 8 }
  ];

  const backupCount = [
    {
      label: 'Qtr1',
      count: 14
    },
    {
      label: 'Qtr2',
      count: 11
    },
    {
      label: 'Qtr3',
      count: 15
    },
    {
      label: 'Qtr4',
      count: 15
    }
  ];
  const maturityCount = [
    {
      label: 'Level 0',
      count: 11
    },
    {
      label: 'Level 1',
      count: 11
    },
    {
      label: 'Level 2',
      count: 11
    },
    {
      label: 'Level 3',
      count: 22
    }
  ];
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <LineChart
            loading={false}
            palatte="rdGy"
            title="Compliance Status Per Meonth"
            data={complianceStatus}
          />
        </Col>
        <Col lg={12} span={24}>
          <PieChart
            loading={false}
            palatte="cubehelixDefault"
            title="Backup Status"
            data={backupStatus}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="cubehelixDefault"
            loading={false}
            title="Count of Maturity Level"
            data={maturityCount}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="rdGy"
            loading={false}
            colorField="count"
            title="Backup Count"
            data={backupCount}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="cividis"
            loading={false}
            title="Operating System By Vendor"
            data={OSByVendor}
          />
        </Col>
      </Row>
    </>
  );
};

export default DailyBackups;

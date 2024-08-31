import { Col, Row } from 'antd';
import { BarChart, LineChart, PieChart } from 'charts';
import React from 'react';

/**
 * Componnent to render
 *
 * @returns {React.FC} component to render
 */
const MacroMSOffice: React.FC = () => {
  const macroStatus = [
    {
      type: 'Not Configured',
      value: 52.75
    },
    {
      type: 'Configured',
      value: 42.27
    }
  ];

  const complianceStatus = [
    { xAxis: 'January', yAxis: 25 },
    { xAxis: 'February', yAxis: 12 },
    { xAxis: 'March', yAxis: 20 },
    { xAxis: 'April', yAxis: 5 },
    { xAxis: 'May', yAxis: 23 },
    { xAxis: 'June', yAxis: 8 },
    { xAxis: 'July', yAxis: 17 },
    { xAxis: 'August', yAxis: 2 },
    { xAxis: 'September', yAxis: 19 },
    { xAxis: 'October', yAxis: 14 },
    { xAxis: 'November', yAxis: 0 },
    { xAxis: 'December', yAxis: 21 }
  ];

  const macroByVendor = [
    { label: 'Vendor C', count: 14 },
    { label: 'Vendor B', count: 13 },
    { label: 'Vendor D', count: 13 },
    { label: 'Vendor A', count: 19 },
    { label: 'Vendor E', count: 6 }
  ];

  const testingDate = [
    {
      label: 'January',
      count: 7
    },
    {
      label: 'Febuary',
      count: 8
    },
    {
      label: 'March',
      count: 17
    },
    {
      label: 'April',
      count: 12
    },
    {
      label: 'May',
      count: 11
    }
  ];
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={12}>
          <PieChart loading={false} palatte="set1" title="Macro Status" data={macroStatus} />
        </Col>
        <Col span={12}>
          <LineChart
            loading={false}
            palatte="set1"
            title="Compliance Status Per Meonth"
            data={complianceStatus}
          />
        </Col>
        <Col span={12}>
          <BarChart
            palatte="set1"
            loading={false}
            title="Compliance Status Per Month"
            data={macroByVendor}
          />
        </Col>
        <Col span={12}>
          <BarChart
            palatte="spectral"
            loading={false}
            colorField="count"
            title="Date of Testing Per Month"
            data={testingDate}
          />
        </Col>
      </Row>
    </>
  );
};

export default MacroMSOffice;

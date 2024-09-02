import { Col, Row } from 'antd';
import { BarChart, LineChart, PieChart } from 'charts';
import React from 'react';

/**
 * Componnent to render
 *
 * @returns {React.FC} component to render
 */
const RestrictPrivilege: React.FC = () => {
  const adminStatus = [
    {
      type: 'Restricted',
      value: 18
    },
    {
      type: 'Not Restricted',
      value: 37
    }
  ];

  const complianceStatus = [
    { xAxis: 'January', yAxis: 8 },
    { xAxis: 'February', yAxis: 4 },
    { xAxis: 'March', yAxis: 9 },
    { xAxis: 'April', yAxis: 7 },
    { xAxis: 'May', yAxis: 2 },
    { xAxis: 'June', yAxis: 3 },
    { xAxis: 'July', yAxis: 2 },
    { xAxis: 'August', yAxis: 7 },
    { xAxis: 'September', yAxis: 2 },
    { xAxis: 'October', yAxis: 4 },
    { xAxis: 'November', yAxis: 1 },
    { xAxis: 'December', yAxis: 6 }
  ];

  const OSbyVendor = [{ label: 'Admin', count: 55 }];

  const privilegeAssignment = [
    {
      label: 'Qtr1',
      count: 9
    },
    {
      label: 'Qtr2',
      count: 11
    },
    {
      label: 'Qtr3',
      count: 8
    },
    {
      label: 'Qtr4',
      count: 9
    }
  ];
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col lg={12} span={24}>
          <LineChart
            loading={false}
            palatte="rainbow"
            title="Compliance Status Per Meonth"
            data={complianceStatus}
          />
        </Col>
        <Col lg={12} span={24}>
          <PieChart loading={false} palatte="paired" title="Admin Status" data={adminStatus} />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="puOr"
            loading={false}
            title="Operating System By Vendor"
            data={OSbyVendor}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="spectral"
            loading={false}
            colorField="count"
            title="Privilege Assignment Count"
            data={privilegeAssignment}
          />
        </Col>
      </Row>
    </>
  );
};

export default RestrictPrivilege;

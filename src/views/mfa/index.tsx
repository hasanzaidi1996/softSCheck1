import { Col, Row } from 'antd';
import { BarChart, LineChart, PieChart } from 'charts';
import React from 'react';

/**
 * Componnent to render
 *
 * @returns {React.FC} component to render
 */
const MFA: React.FC = () => {
  const mfaStatus = [
    {
      type: 'Enabled',
      value: 20
    },
    {
      type: 'Not Enabled',
      value: 35
    }
  ];

  const complianceStatus = [
    { xAxis: 'January', yAxis: 3 },
    { xAxis: 'February', yAxis: 5 },
    { xAxis: 'March', yAxis: 3 },
    { xAxis: 'April', yAxis: 4 },
    { xAxis: 'May', yAxis: 4 },
    { xAxis: 'June', yAxis: 8 },
    { xAxis: 'July', yAxis: 8 },
    { xAxis: 'August', yAxis: 4 },
    { xAxis: 'September', yAxis: 4 },
    { xAxis: 'October', yAxis: 3 },
    { xAxis: 'November', yAxis: 7 },
    { xAxis: 'December', yAxis: 3 }
  ];

  const userCountByMFAMethod = [
    { label: 'MFA E', count: 14 },
    { label: 'MFA D', count: 12 },
    { label: 'MFA A', count: 11 },
    { label: 'MFA C', count: 10 },
    { label: 'MFA B', count: 8 }
  ];

  const MFAImplementationDate = [
    {
      label: 'Qtr1',
      count: 11
    },
    {
      label: 'Qtr2',
      count: 7
    },
    {
      label: 'Qtr3',
      count: 13
    },
    {
      label: 'Qtr4',
      count: 4
    }
  ];
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col lg={12} span={24}>
          <PieChart loading={false} palatte="plasma" title="MFA Status" data={mfaStatus} />
        </Col>
        <Col lg={12} span={24}>
          <LineChart
            loading={false}
            palatte="puOr"
            title="Compliance Status Per Meonth"
            data={complianceStatus}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="rdYlGn"
            loading={false}
            title="User Count By MFA Methods"
            data={userCountByMFAMethod}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="rdGy"
            loading={false}
            colorField="count"
            title="Count By MFA Implementation Date"
            data={MFAImplementationDate}
          />
        </Col>
      </Row>
    </>
  );
};

export default MFA;

import { Col, Row } from 'antd';
import { BarChart, LineChart, PieChart } from 'charts';
import CustomTable from 'components/table';
import React from 'react';
import { MaturityTableCoulums } from './MaturityTableCoulums';

/**
 * Componnent to render
 *
 * @returns {React.FC} component to render
 */
const AppHardening: React.FC = () => {
  const hardeningStatus = [
    {
      type: 'Hardened',
      value: 19
    },
    {
      type: 'Not Hardened',
      value: 36
    }
  ];

  const complianceStatus = [
    { xAxis: 'January', yAxis: 7 },
    { xAxis: 'February', yAxis: 5 },
    { xAxis: 'March', yAxis: 7 },
    { xAxis: 'April', yAxis: 3 },
    { xAxis: 'May', yAxis: 5 },
    { xAxis: 'June', yAxis: 3 },
    { xAxis: 'July', yAxis: 1 },
    { xAxis: 'August', yAxis: 3 },
    { xAxis: 'September', yAxis: 5 },
    { xAxis: 'October', yAxis: 6 },
    { xAxis: 'November', yAxis: 6 },
    { xAxis: 'December', yAxis: 4 }
  ];

  const applicationNameByVendor = [
    { label: 'Vendor C', count: 11 },
    { label: 'Vendor B', count: 8 },
    { label: 'Vendor D', count: 11 },
    { label: 'Vendor A', count: 13 },
    { label: 'Vendor E', count: 12 }
  ];

  const testingDate = [
    {
      label: 'Qtr1',
      count: 13
    },
    {
      label: 'Qtr2',
      count: 20
    },
    {
      label: 'Qtr3',
      count: 10
    },
    {
      label: 'Qtr4',
      count: 12
    }
  ];
  const tableData = [
    {
      _id: '1',
      maturityLevel: 'Level 0',
      implementationStatus: 'Not Implemented',
      defensiveActions: 'Disable unnecessary features and services in user applications',
      offensiveActions:
        'Establish basic application-level firewall rules to block unauthorized access'
    },
    {
      _id: '2',
      maturityLevel: 'Level 1',
      implementationStatus: 'Partially Implemented',
      defensiveActions: 'Apply security patches promptly to all user applications',
      offensiveActions:
        'Perform vulnerability scans to identify and fix security issues in all user applications'
    },
    {
      _id: '3',
      maturityLevel: 'Level 2',
      implementationStatus: 'Mostly Implemented',
      defensiveActions: 'Enforce least privilege access for all user applications',
      offensiveActions:
        'Conduct simulated phishing attacks to test user awareness and application resilience'
    },
    {
      _id: '4',
      maturityLevel: 'Level 3',
      implementationStatus: 'Fully Implemented',
      defensiveActions:
        'Utilize advances endpoint protection solutions to miniter and protect user applications',
      offensiveActions:
        'Employ red teaming exercise to actively test and expolit applications for vulnerabilities'
    }
  ];
  const containerStyle = {
    height: '100%',
    width: '100%',
    padding: '24px',
    background: '#fff',
    borderRadius: '10px'
  };

  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div style={containerStyle}>
            <CustomTable
              dataSource={tableData}
              // search={search}
              columns={MaturityTableCoulums}
              loading={false}
              pagination={false}
            />
          </div>
        </Col>
        <Col lg={12} span={24}>
          <LineChart
            loading={false}
            palatte="brBG"
            title="Compliance Status Per Meonth"
            data={complianceStatus}
          />
        </Col>
        <Col lg={12} span={24}>
          <PieChart
            loading={false}
            palatte="viridis"
            title="Hardening Status"
            data={hardeningStatus}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="paired"
            loading={false}
            title="Compliance Status Per Month"
            data={applicationNameByVendor}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="pRGn"
            loading={false}
            colorField="count"
            title="Count of Date of Testing by Quarter"
            data={testingDate}
          />
        </Col>
      </Row>
    </>
  );
};

export default AppHardening;

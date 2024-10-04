import { Col, Row } from 'antd';
import StackedBarChart from 'charts/stackedBarChart';
import { IStackBarChartProps } from 'charts/stackedBarChart/types';
import React from 'react';

/**
 * @returns {React.FC} component to render
 */
const ISOTechnological: React.FC = () => {
  /**
   *
   * @param {number} length length of dataset
   * @returns {IStackBarChartProps.data} data to return
   */
  const generateRandomData = (length: number): IStackBarChartProps['data'] => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const categories = ['compliant', 'non-compliant', 'not-assessed', 'partially compliant'];

    const data = [];

    for (let i = 0; i < length; i++) {
      const randomMonth = months[Math.floor(Math.random() * months.length)];
      const randomCount = Math.floor(Math.random() * 5);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];

      data.push({
        label: randomMonth,
        count: randomCount,
        category: randomCategory
      });
    }

    return data;
  };

  return (
    <Row gutter={[10, 10]}>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Secure Communications"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="E-mail Protection"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Wireless Network Security"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Data Integrity Verification"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Automated Security Patching"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Intrusion Detection and Prevention"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Threat Detection and Response"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Web Content Filtering"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Vulnerability Scanning"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Encryption Key Management"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Mobile Device Management"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Secure Development Environment"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Secure System Engineering"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Endpoint Security"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Use of Virtualization and Cloud Services"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Secure Messaging"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Secure Disposal or Reuse of Equipment"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="System Hardening"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Application Security"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Monitoring Information Systems"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Secure Coding"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Data Loss Prevention"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Protection Against Malware"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Clock Synchronization"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Monitoring Activities"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Logging"
        />
      </Col>

      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information Backup"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Data Leakage Prevention"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Data Masking"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information Deletion"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Vulnerability Management"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Configuration Management"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Security Testing"
        />
      </Col>

      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Protection of Test Data"
        />
      </Col>
    </Row>
  );
};

export default ISOTechnological;

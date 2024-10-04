import { Col, Row } from 'antd';
import StackedBarChart from 'charts/stackedBarChart';
import { IStackBarChartProps } from 'charts/stackedBarChart/types';
import React from 'react';

/**
 * @returns {React.FC} component to render
 */
const ISOPhysical: React.FC = () => {
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
          title="Protection of Test Data"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Secure Development Lifecycle"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Use of Cryptography"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Security of Network Services"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Network Controls"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="User Endpoint Devices"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Equipment Security"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Clear Desk and Clear Screen Policy"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Working in Secure Areas"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Protecting Against External and Environmental Threats"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Physical Security Monitoring"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Securing Offices, Rooms, and Facilities"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Physical Entry Controls"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Physical Security Perimeter"
        />
      </Col>
    </Row>
  );
};

export default ISOPhysical;

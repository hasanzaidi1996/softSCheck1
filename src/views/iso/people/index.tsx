import { Col, Row } from 'antd';
import StackedBarChart from 'charts/stackedBarChart';
import { IStackBarChartProps } from 'charts/stackedBarChart/types';
import React from 'react';

/**
 * @returns {React.FC} component to render
 */
const ISOPeople: React.FC = () => {
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
          title="Secure Disposal of Information"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Confidentiality During Employment"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Confidentiality Agreements"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Responsibilities after Termination or Change of Employment"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Disciplinary Process"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information Security Awareness, Education, and Training"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Terms and Conditions of Employment"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Screening"
        />
      </Col>
    </Row>
  );
};

export default ISOPeople;

import { Col, Row } from 'antd';
import StackedBarChart from 'charts/stackedBarChart';
import { IStackBarChartProps } from 'charts/stackedBarChart/types';
import React from 'react';

/**
 * @returns {React.FC} component to render
 */
const ISOOrganization: React.FC = () => {
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
          title="Acceptable use of information and other associated assets"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Access Control"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Access Rights"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Addressing Information Security within Supplier Aggreements"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Assessment and Decision on Information Security Events"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Authentication Information"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Avaliability of Information Processing Facilities"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Classification of Information"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Collection of Evidence"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Compliance with information security policies"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Contact with authorities"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Contact with special interest groups"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Continuity Planning for Information Security"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Documentation of Information Security Controls"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Identity management"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Independent Review of Information Security policy "
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information security on project management"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information security in supplier Relationships"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information security incident management Planning and Response"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information Securituy Roles and responsibility"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Information Transfer"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Intellectual Property Rights (IPR)"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Inventory of iformation and other associated assets"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Labelling of information"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Learning from Information Security Incidents"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Legal and Regulatory Requirements"
        />
      </Col>

      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Management Responsibilities"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Managing Information Security in the Supply Chain"
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
          title="Policies for Information Security"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Privacy and Protection of Personal Identifiable Information (PII)"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Protection of Records"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Risk Assessments"
        />
      </Col>

      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Response of Information Security Incidents"
        />
      </Col>

      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Return of assets"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Segregation of duties"
        />
      </Col>
      <Col span={12}>
        <StackedBarChart
          data={generateRandomData(40)}
          loading={false}
          palatte="set1"
          title="Threat Intelligence"
        />
      </Col>
    </Row>
  );
};

export default ISOOrganization;

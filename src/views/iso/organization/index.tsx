import { Col, Row } from 'antd';
import StackedBarChart from 'charts/stackedBarChart';
import React from 'react';

/**
 * @returns {React.FC} component to render
 */
const ISOOrganization: React.FC = () => {
  const data = [
    { label: 'test1', count: 22, category: 'post' },
    { label: 'test1', count: 22, category: 'post2' },
    { label: 'test2', count: 222, category: 'post' },
    { label: 'test3', count: 2, category: 'post2' },
    { label: 'test1', count: 548, category: 'post' },
    { label: 'test2', count: 982, category: 'post2' },
    { label: 'test3', count: 191, category: 'post' },
    { label: 'test6', count: 17, category: 'post2' },
    { label: 'test5', count: 654, category: 'post3' },
    { label: 'test6', count: 38, category: 'post' },
    { label: 'test3', count: 473, category: 'post2' },
    { label: 'test5', count: 812, category: 'post3' },
    { label: 'test4', count: 275, category: 'post' },
    { label: 'test6', count: 351, category: 'post2' },
    { label: 'test5', count: 351, category: 'post2' },
    { label: 'test5', count: 351, category: 'post2' }
  ];
  return (
    <Row>
      <Col span={24}>
        <StackedBarChart data={data} loading={false} palatte="viridis" title="Compliance" />
      </Col>
    </Row>
  );
};

export default ISOOrganization;

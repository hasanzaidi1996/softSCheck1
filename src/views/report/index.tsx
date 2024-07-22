import React from 'react';
import ReportsTable from './components/ReportsTable';
import { Col, Row } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, FileDoneOutlined } from '@ant-design/icons';
import { TopCountCard } from 'components';

/**
 * Preview the report component
 *
 * @returns {React.FC} Report component to render
 */
const Report: React.FC = () => {
  const topCards = [
    {
      title: 'Submitted',
      value: 20,
      color: 'blue',
      icon: <FileDoneOutlined />
    },
    {
      title: 'Pending',
      value: 20,
      color: 'orange',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'Completed',
      value: 20,
      color: 'green',
      icon: <CheckCircleOutlined />
    }
  ];

  return (
    <>
      <Row gutter={[20, 20]}>
        {topCards.map((card, index) => {
          return (
            <Col key={index} span={8}>
              <TopCountCard
                title={card.title}
                value={card.value}
                valueStyle={{ color: card.color }}
                prefix={card.icon}
              />
            </Col>
          );
        })}

        <Col span={24}>
          <ReportsTable />
        </Col>
      </Row>
    </>
  );
};

export default Report;

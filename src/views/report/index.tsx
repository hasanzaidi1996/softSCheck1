import React, { useEffect, useMemo } from 'react';
import ReportsTable from './components/ReportsTable';
import { Col, Row } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
import { TopCountCard } from 'components';
import { useAppDispatch } from 'appRedux/store';
import { useSelector } from 'react-redux';
import { ReportSelector } from 'appRedux/reducers';
import { getReports } from 'appRedux/actions/reportAction';

interface StatusCount {
  submitted: number;
  completed: number;
  failed: number;
  pending: number;
}
/**
 * Preview the report component
 *
 * @returns {React.FC} Report component to render
 */
const Report: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reports, reportsLoading } = useSelector(ReportSelector);

  useEffect(() => {
    if (!reports && reportsLoading) {
      dispatch(getReports());
    }
  }, [reports, reportsLoading]);

  const topCardCount = useMemo<StatusCount>(() => {
    const data = {
      submitted: reports?.length || 0,
      completed: 0,
      failed: 0,
      pending: 0
    };
    reports?.forEach((report) => {
      data[report.status] = data[report.status] + 1;
    });
    return data;
  }, [reports]);

  const topCards = [
    {
      title: 'Submitted',
      value: topCardCount.submitted,
      color: 'blue',
      icon: <FileDoneOutlined />
    },
    {
      title: 'Pending',
      value: topCardCount.pending,
      color: 'orange',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'Completed',
      value: topCardCount.completed,
      color: 'green',
      icon: <CheckCircleOutlined />
    },
    {
      title: 'Failed',
      value: topCardCount.failed,
      color: 'red',
      icon: <CloseCircleOutlined />
    }
  ];

  return (
    <>
      <Row gutter={[20, 20]}>
        {topCards.map((card, index) => {
          return (
            <Col key={index} span={6}>
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
          <ReportsTable data={reports} loading={reportsLoading} />
        </Col>
      </Row>
    </>
  );
};

export default Report;

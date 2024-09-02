import { CalendarFilled, DotChartOutlined } from '@ant-design/icons';
import { Column, Line } from '@ant-design/plots';
import { Button, Card, Col, DatePicker, DatePickerProps, Row, Skeleton, Space } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import { PieChart } from 'charts';
import ColumnChart from 'charts/columChart';
import React, { useState } from 'react';

const { RangePicker } = DatePicker;

/**
 * Dashboard component
 *
 * @returns {React.FC} component to render
 */
const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const chartSize = 300;
  /**
   * Sleep function for temprrary skeleton preview
   *
   * @param {number} ms
   * @returns
   */
  const sleep = (ms: number) => {
    // eslint-disable-next-line promise/param-names
    return new Promise((r: TimerHandler) => {
      return setTimeout(r, ms);
    });
  };

  /**
   * Update the data on seleciton of range
   *
   * @param {DatePickerProps['value'] | RangePickerProps['value']} value range selection value
   *
   */
  const rangeSelection = async (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    setLoading(true);
    await sleep(2000);
    setLoading(false);
  };

  const complianceStatusData = [
    {
      month: 'January',
      value: 1,
      category: 'App Whitelisting'
    },
    {
      month: 'January',
      value: 4,
      category: 'Configure MS Office'
    },
    { month: 'February', category: 'App Whitelisting', value: 2 },
    { month: 'February', category: 'Configure MS Office', value: 5 },
    { month: 'February', category: 'Daily Backups', value: 1 },
    {
      month: 'February',
      value: 2,
      category: 'Multi Factor Authentication'
    },
    {
      month: 'March',
      value: 5,
      category: 'Patch Application'
    },
    {
      month: 'March',
      value: 2,
      category: 'Patch Operating System'
    },
    {
      month: 'April',
      value: 4,
      category: 'Restrict Admin Privileges'
    },
    {
      month: 'April',
      value: 1,
      category: 'User Application Hardening'
    },
    {
      month: 'May',
      value: 3,
      category: 'App Whitelisting'
    },
    {
      month: 'May',
      value: 5,
      category: 'Daily Backups'
    },
    {
      month: 'June',
      value: 2,
      category: 'Multi Factor Authentication'
    },
    {
      month: 'June',
      value: 4,
      category: 'Configure MS Office'
    },
    {
      month: 'July',
      value: 1,
      category: 'Patch Application'
    },
    {
      month: 'July',
      value: 5,
      category: 'Patch Operating System'
    },
    {
      month: 'August',
      value: 3,
      category: 'Restrict Admin Privileges'
    },
    {
      month: 'August',
      value: 2,
      category: 'User Application Hardening'
    },
    {
      month: 'September',
      value: 4,
      category: 'App Whitelisting'
    },
    {
      month: 'September',
      value: 1,
      category: 'Daily Backups'
    },
    {
      month: 'October',
      value: 5,
      category: 'Multi Factor Authentication'
    },
    {
      month: 'October',
      value: 2,
      category: 'Configure MS Office'
    },
    {
      month: 'November',
      value: 3,
      category: 'Patch Application'
    },
    {
      month: 'November',
      value: 4,
      category: 'Patch Operating System'
    },
    {
      month: 'December',
      value: 1,
      category: 'Restrict Admin Privileges'
    },
    {
      month: 'December',
      value: 5,
      category: 'User Application Hardening'
    }
  ];

  const configCompliance = {
    data: complianceStatusData,
    xField: 'month',
    yField: 'value',
    point: {
      shapeField: 'circle',
      sizeField: 5
    },
    interaction: {
      tooltip: {
        marker: false
      }
    },
    style: {
      lineWidth: 1
    },
    legend: { size: false },
    colorField: 'category'
  };

  const overallStatusPercentage = [
    {
      type: 'Applied',
      value: 13
    },
    {
      type: 'Enabled',
      value: 8
    },
    {
      type: 'Restricted',
      value: 4
    },
    {
      type: 'Hardened',
      value: 11
    },
    {
      type: 'Completed',
      value: 6
    },
    {
      type: 'Whitelisted',
      value: 9
    },
    {
      type: 'Configured',
      value: 5
    },
    {
      type: 'Applied',
      value: 10
    },
    {
      type: 'Enabled',
      value: 7
    },
    {
      type: 'Restricted',
      value: 3
    }
  ];

  const successFailureCount = [
    {
      type: 'Application Whitelisted',
      value: 70
    },
    {
      type: 'Application Hardened',
      value: 55
    },
    {
      type: 'Admin Privileges',
      value: 65
    },
    {
      type: 'MFA Enabled',
      value: 80
    },
    {
      type: 'OS Patched',
      value: 75
    },
    {
      type: 'MS Office',
      value: 60
    },
    {
      type: 'Backups',
      value: 85
    },
    {
      type: 'Path Applied',
      value: 50
    }
  ];

  const configStatusCount = {
    data: successFailureCount,
    xField: 'type',
    yField: 'value',
    style: {
      maxWidth: 50
    }
  };

  const dateOfImplementation = [
    {
      group: 'Qtr 1',
      name: 'Application Whitelisting',
      value: 1
    },
    {
      group: 'Qtr 1',
      name: 'Application Hardened',
      value: 3
    },
    {
      group: 'Qtr 1',
      name: 'Admin Privileges Restricted',
      value: 4
    },
    {
      group: 'Qtr 1',
      name: 'MFA Enabled',
      value: 2
    },
    {
      group: 'Qtr 1',
      name: 'Daily Backups',
      value: 1
    },
    {
      group: 'Qtr 1',
      name: 'Patch Application',
      value: 4
    },
    {
      group: 'Qtr 1',
      name: 'Patch Operating System',
      value: 3
    },
    {
      group: 'Qtr 2',
      name: 'Application Whitelisting',
      value: 2
    },
    {
      group: 'Qtr 2',
      name: 'Application Hardened',
      value: 4
    },
    {
      group: 'Qtr 2',
      name: 'Admin Privileges Restricted',
      value: 3
    },
    {
      group: 'Qtr 2',
      name: 'MFA Enabled',
      value: 1
    },
    {
      group: 'Qtr 2',
      name: 'Daily Backups',
      value: 2
    },
    {
      group: 'Qtr 2',
      name: 'Patch Application',
      value: 1
    },
    {
      group: 'Qtr 2',
      name: 'Patch Operating System',
      value: 4
    },
    {
      group: 'Qtr 3',
      name: 'Application Whitelisting',
      value: 3
    },
    {
      group: 'Qtr 3',
      name: 'Application Hardened',
      value: 2
    },
    {
      group: 'Qtr 3',
      name: 'Admin Privileges Restricted',
      value: 1
    },
    {
      group: 'Qtr 3',
      name: 'MFA Enabled',
      value: 4
    },
    {
      group: 'Qtr 3',
      name: 'Daily Backups',
      value: 3
    },
    {
      group: 'Qtr 3',
      name: 'Patch Application',
      value: 4
    },
    {
      group: 'Qtr 3',
      name: 'Patch Operating System',
      value: 2
    }
  ];

  const configDateOfImplementation = {
    data: dateOfImplementation,
    xField: 'group',
    yField: 'value',
    colorField: 'name',
    group: true,
    scale: { color: { palette: 'paired' } }
  };

  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Card>
            <Space direction="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
              <Row gutter={[20, 20]}>
                <Col span={4}>
                  <Button icon={<CalendarFilled />}>Range</Button>
                </Col>
                <Col span={20}>
                  <RangePicker showTime onOk={rangeSelection} />
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Compliance Status By Year">
            {loading ? (
              <Skeleton.Node active={true} style={{ height: chartSize, width: 1220 }}>
                <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
              </Skeleton.Node>
            ) : (
              <Line {...configCompliance} autoFit={true} height={300} />
            )}
          </Card>
        </Col>
        <Col span={9}>
          <PieChart
            data={overallStatusPercentage}
            title="Overall status percentage"
            loading={loading}
            palatte="set2"
          />
        </Col>
        <Col span={15}>
          <ColumnChart
            {...configStatusCount}
            loading={loading}
            title={'Count of Success and Failure Status'}
          />
        </Col>
        <Col span={24}>
          <Card title="Count of Date of Implementation">
            {loading ? (
              <Skeleton.Node active={true} style={{ height: chartSize, width: 1220 }}>
                <DotChartOutlined style={{ fontSize: chartSize, color: '#bfbfbf' }} />
              </Skeleton.Node>
            ) : (
              <Column {...configDateOfImplementation} />
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;

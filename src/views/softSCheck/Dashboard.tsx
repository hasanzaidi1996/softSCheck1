import { Column, Line } from '@ant-design/plots';
import { Button, Card, Modal } from 'antd';
import { PieChart } from 'charts';
import ColumnChart from 'charts/columChart';
import { useState } from 'react';
import Certificate from '../../assets/img/softscheckCertificate.png';

/**
 * Soft S Check Dashboard component
 *
 * @returns {React.ReactElement} Dashboard component
 */
const Dashboard = () => {
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
  const [open, setOpen] = useState(false);
  return (
    <div className="container p-6">
      <Modal
        title="My Compliance Certificate"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <a
            href={Certificate}
            download="Compliance_Certificate"
            target="_blank"
            rel="noreferrer"
            key="download">
            <Button size="large" className="bg-blue-500 rounded-md text-white">
              Download My Certificate
            </Button>
          </a>
        ]}>
        <img src={Certificate} alt="Certificate" />
      </Modal>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">Compliance Results based on your answers</h1>
        <Button type="primary" className="rounded-lg" onClick={() => setOpen(true)}>
          Show Certificate
        </Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <PieChart
          data={overallStatusPercentage}
          title="Overall status percentage"
          loading={false}
          palatte="set2"
        />
        <ColumnChart
          {...configStatusCount}
          title={'Count of Success and Failure Status'}
          loading={false}
        />
        <Card title="Date of Implementation">
          <Line {...configCompliance} autoFit={true} height={300} />
        </Card>
        <Card title="Date of Implementation">
          {' '}
          <Column {...configDateOfImplementation} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

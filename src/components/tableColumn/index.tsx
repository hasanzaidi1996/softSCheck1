import { Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { getColor } from 'colors';
import moment from 'moment';

export const ReportColumns: ColumnsType = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },

  {
    title: 'Submitted',
    dataIndex: 'createdAt',
    render: (date) => {
      return <>{moment(date).format('DD-MM-YYYY hh:mm:ss')}</>;
    }
  },

  {
    title: 'Processed',
    dataIndex: 'createdAt',
    render: (date) => {
      return <>{moment(date).format('DD-MM-YYYY hh:mm:ss')}</>;
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (data) => {
      return <Tag color={getColor(data)}>{data}</Tag>;
    }
  }
];

export const MaturityTableCoulums: ColumnsType = [
  {
    title: 'Maturity Level',
    dataIndex: 'maturityLevel',
    render: (level) => {
      return <Tag color={getColor(level)}>{level}</Tag>;
    }
  },
  {
    title: 'Implementation Status',
    dataIndex: 'implementationStatus'
  },

  {
    title: 'Defensive Actions',
    dataIndex: 'defensiveActions'
  },

  {
    title: 'Offensive Actions',
    dataIndex: 'offensiveActions'
  },
  {
    title: 'Integrated Services',
    dataIndex: 'integratedServices'
  }
];

export const AppHardeningMaturityTableCoulums: ColumnsType = [
  {
    title: 'Maturity Level',
    dataIndex: 'maturityLevel',
    render: (level) => {
      return <Tag color={getColor(level)}>{level}</Tag>;
    }
  },
  {
    title: 'Implementation Status',
    dataIndex: 'implementationStatus'
  },

  {
    title: 'Defensive Actions',
    dataIndex: 'defensiveActions'
  },

  {
    title: 'Offensive Actions',
    dataIndex: 'offensiveActions'
  }
];

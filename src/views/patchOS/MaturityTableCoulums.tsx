import { ColumnsType } from 'antd/lib/table';

export const MaturityTableCoulums: ColumnsType = [
  {
    title: 'Maturity Level',
    dataIndex: 'maturityLevel'
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

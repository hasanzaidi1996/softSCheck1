import { ColumnsType } from 'antd/lib/table';

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
    title: 'Date of submission',
    dataIndex: 'date'
  },
  {
    title: 'Status',
    dataIndex: 'status'
  }
];

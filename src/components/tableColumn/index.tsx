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

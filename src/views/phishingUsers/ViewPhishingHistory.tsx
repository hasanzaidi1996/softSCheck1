import { Modal, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { getPhishingLogs } from 'appRedux/actions/phishingAction';
import { PhishingSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import CustomTable from 'components/table';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ViewPhishingHistory = ({
  viewModal,
  setViewModal,
  userInfo
}: {
  viewModal?: boolean;
  setViewModal?: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo?: any;
}) => {
  const dispatch = useAppDispatch();
  const { phishings, phishingsLoading } = useSelector(PhishingSelector);
  useEffect(() => {
    if (!phishings && phishingsLoading) {
      dispatch(getPhishingLogs());
    }
  }, [phishings]);
  const matchData = phishings?.filter((phishing) => phishing.user === userInfo?.[0]?._id);
  const UserColumns: ColumnsType = [
    {
      title: 'Email Sent On',
      dataIndex: 'createdAt',
      render: (data) => {
        return (
          <div>
            {moment(data).format('DD-MM-YYYY')} at{' '}
            <span className="text-red-500">{moment(data).format('hh:mm A')}</span>
          </div>
        );
      }
    },

    {
      title: 'Updated On',
      dataIndex: 'updatedAt',
      render: (data) => {
        return (
          <div>
            {moment(data).format('DD-MM-YYYY')} at{' '}
            <span className="text-red-500">{moment(data).format('hh:mm A')}</span>
          </div>
        );
      }
    },

    {
      title: 'Status',
      dataIndex: 'status',
      render: (data) => {
        return (
          <Tag
            color={data === 'email-sent' ? 'green' : 'red'}
            className={'flex items-center justify-center w-16'}>
            {data === 'email-sent' ? 'Email Sent' : 'Phished'}
          </Tag>
        );
      }
    }
  ];
  return (
    <div>
      <Modal
        open={viewModal}
        // bodyStyle={{ padding: 0, margin: 0, height: '100%', borderRadius: 10 }}
        footer={null}
        centered
        closable
        // className="w-full"

        width={1000}
        onCancel={() => {
          setViewModal?.(false);
        }}>
        <h1 className="text-2xl my-4 capitalize">
          Phishing History of {userInfo?.[0].firstName} {userInfo?.[0].lastName}
        </h1>
        <CustomTable
          columns={UserColumns}
          size="large"
          dataSource={matchData || []}
          pagination={false}
        />
      </Modal>
    </div>
  );
};

export default ViewPhishingHistory;

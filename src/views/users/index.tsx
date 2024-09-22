import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { getUsers } from 'appRedux/actions/userAction';
import { UserSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import CustomTable from 'components/table';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddEditUser from './AddEditUser';
import DeleteUser from './DeleteUser';
import ViewUser from './ViewUser';

/**
 * @returns {React.FC} - returns Users
 */
const Users = () => {
  const dispatch = useAppDispatch();
  const { users, usersLoading } = useSelector(UserSelector);
  const [activeData, setActiveData] = React.useState({});
  const [viewModal, setViewModal] = React.useState(false);
  const [addEditModal, setAddEditModal] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  useEffect(() => {
    if (!users && usersLoading) {
      dispatch(getUsers());
    }
  }, [users]);
  console.log('@@@@', users);

  const ReportColumns: ColumnsType = [
    {
      title: 'First Name',
      dataIndex: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Role',
      dataIndex: 'role'
    },
    {
      title: 'Organization',
      dataIndex: 'organization'
    },
    {
      title: 'Status',
      dataIndex: 'isVerified',
      render: (data) => {
        return (
          <Tag
            color={data === true ? 'green' : 'red'}
            className={'flex items-center justify-center w-16'}>
            {data === true ? 'Active' : 'Inactive'}
          </Tag>
        );
      }
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (data: any, record: any) => {
        return (
          <div className="flex items-center justify-center w-fit gap-2">
            <EyeOutlined
              onClick={() => {
                setActiveData(record);
                setViewModal(true);
              }}
            />
            <EditOutlined
              className="text-green-500"
              onClick={() => {
                setIsEdit(true);
                setActiveData(record);
                setAddEditModal(true);
              }}
            />
            <DeleteOutlined
              className="text-red-500"
              onClick={() => {
                setActiveData(record);
                setDeleteModal(true);
              }}
            />
          </div>
        );
      }
    }
  ];

  return (
    <div className="container p-8">
      <AddEditUser
        addEditModal={addEditModal}
        setAddEditModal={setAddEditModal}
        data={activeData}
        setData={setActiveData}
        isEdit={isEdit}
      />
      <ViewUser viewModal={viewModal} setViewModal={setViewModal} data={activeData} />
      <DeleteUser deleteModal={deleteModal} setDeleteModal={setDeleteModal} data={activeData} />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">All Users</h1>
        <Button
          type="primary"
          size="large"
          className="rounded-md flex items-center justify-center"
          onClick={() => {
            setAddEditModal(true);
            setActiveData({});
            setIsEdit(false);
          }}>
          Add User <span className="ml-2 text-xl">+</span>
        </Button>
      </div>
      <div>
        <CustomTable
          size="large"
          dataSource={users || []}
          // search={search}
          columns={ReportColumns}
          // loading={props.loading || loading}
        />
      </div>
    </div>
  );
};

export default Users;

import { ExclamationCircleOutlined, HomeOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import { addPhishing } from 'appRedux/actions/phishingAction';
import { getUsers } from 'appRedux/actions/userAction';
import { UserSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ViewPhishingHistory from './ViewPhishingHistory';

/**
 * Renders the main index component.
 */
const PhishingUsers = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  console.log(selectedUsers);
  const dispatch = useAppDispatch();
  const { users, usersLoading } = useSelector(UserSelector);
  useEffect(() => {
    if (!users && usersLoading) {
      dispatch(getUsers());
    }
  }, [users]);
  console.log('@@@@', users);
  const [userInfo, setUserInfo] = useState({});
  const [viewModal, setViewModal] = useState(false);
  const showConfirm = () => {
    confirm({
      title: 'Are you sure you want to send emails?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone. This will send emails to the selected users.',
      /**
       * Called when the user clicks the OK button.
       * Logs a message to the console.
       */
      onOk: function () {
        dispatch(
          addPhishing({
            ids: selectedUsers
          })
        );
      }
    });
  };

  return (
    <div className="container">
      <ViewPhishingHistory
        viewModal={viewModal}
        setViewModal={setViewModal}
        userInfo={[userInfo]}
      />
      <h1 className="text-2xl my-4 capitalize">Phishing Users</h1>
      <div className="bg-tertiary rounded-lg p-6">
        <div className="flex justify-between items-center mb-6 text-lg font-semibold capitalize">
          <p>
            {selectedUsers?.length} user
            {selectedUsers?.length > 1 ? 's' : ''} selected
          </p>
          <Button
            type="primary"
            className="rounded-lg w-min"
            disabled={selectedUsers?.length === 0}
            onClick={showConfirm}>
            Send Emails
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {users?.map((user, index) => {
            return (
              <div
                key={index}
                className="shadow-lg rounded-lg p-6 w-72 hover:bg-gray-100 cursor-pointer flex flex-col justify-between"
                onClick={() => {
                  if (selectedUsers.includes(user._id)) {
                    setSelectedUsers(selectedUsers.filter((id) => id !== user._id));
                  } else {
                    setSelectedUsers([...selectedUsers, user._id]);
                  }
                }}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between w-full gap-4">
                    <p className="text-xl font-semibold break-words capitalize">
                      {user && user.firstName} {user && user.lastName}
                    </p>
                    <Checkbox
                      checked={selectedUsers.includes(user._id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedUsers([...selectedUsers, user._id]);
                        } else {
                          setSelectedUsers(selectedUsers.filter((id) => id !== user._id));
                        }
                      }}
                    />
                  </div>

                  <p className="text-sm capitalize">
                    {user && user?.role} at{' '}
                    <span className="italic uppercase">{user && user.organization}</span>
                  </p>
                  <div className="flex items-center gap-1">
                    <MailOutlined />
                    <a
                      className="hover:text-red-500 w-min"
                      href={`mailto:${user && user.email}`}
                      onClick={(e) => e.stopPropagation()}>
                      {user && user.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <HomeOutlined />
                    <p>{user && user.address}</p>
                  </div>
                </div>
                <p
                  className="text-sm underline hover:underline cursor-pointer w-full text-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    setUserInfo(user);
                    setViewModal(true);
                  }}>
                  View Phishing History
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhishingUsers;

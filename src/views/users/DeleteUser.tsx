import { Button, Modal } from 'antd';
import { deleteUser } from 'appRedux/actions/userAction';
import { useAppDispatch } from 'appRedux/store';
import React from 'react';
import DeleteIcon from '../../assets/img/DeleteIcon.png';

/**
 * @returns {React.FC} - returns Users
 */
const DeleteUser = ({
  deleteModal,
  setDeleteModal,
  data
}: {
  deleteModal?: boolean;
  setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
}) => {
  const dispatch = useAppDispatch();
  /**
   * Handle cancel button click in modal dialog.
   *
   * Simply logs a message to the console and sets `open` to `false`.
   */
  const handleCancel = () => {
    setDeleteModal?.(false);
  };

  /**
   * Handles delete button click in modal dialog.
   *
   * Dispatches deleteUser action and sets deleteModal to false.
   */
  const habdleDelete = () => {
    dispatch(deleteUser(data?._id));
    setDeleteModal?.(false);
  };
  console.log(data);
  return (
    <Modal
      centered
      open={deleteModal}
      footer={null}
      //   onOk={handleOk}
      //   confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={DeleteIcon} alt="delete" className="w-24 h-24" />
          <p className="text-xl font-semibold text-center">
            Are you sure you want to delete this user?
          </p>
        </div>

        <div className="flex w-full justify-end items-center gap-4 mt-4">
          <Button
            type="ghost"
            htmlType="reset"
            className="rounded-md w-full"
            onClick={handleCancel}>
            No, Cancel
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            className="rounded-md w-full bg-red-500"
            onClick={habdleDelete}>
            Yes, Delete User
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUser;

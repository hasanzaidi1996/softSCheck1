import { Button, Modal } from 'antd';
import React from 'react';
import UserImage from '../../assets/img/userImage.png';

/**
 * @returns {React.FC} - returns Users
 */
const ViewUser = ({
  viewModal,
  setViewModal,
  data
}: {
  viewModal?: boolean;
  setViewModal?: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
}) => {
  /**
   * Handle ok button click in modal dialog.
   *
   * Changes the `modalText` state to indicate that the modal will be closed
   * after two seconds. Sets `confirmLoading` to `true` and then sets both
   * `open` and `confirmLoading` to `false` after a two second delay.
   */

  /**
   * Handle cancel button click in modal dialog.
   *
   * Simply logs a message to the console and sets `open` to `false`.
   */
  const handleCancel = () => {
    setViewModal?.(false);
  };
  return (
    <Modal
      open={viewModal}
      bodyStyle={{ padding: 0, margin: 0, height: '100%' }}
      footer={null}
      centered
      closable={false}
      className="max-w-72"
      //   onOk={handleOk}
      onCancel={handleCancel}>
      <div className=" w-full text-center">
        <div className="bg-primary p-3 rounded-b-[40%] flex items-center justify-center">
          <img src={UserImage} alt="user" className="w-48 h-32 object-contain object-top" />
        </div>
        <div className="p-4 flex flex-col gap-4 items-center ">
          {/* <p className="text-xs">
            Member Since: {data && new Date(data.createdAt).toLocaleDateString()}
          </p> */}
          <p className="text-xl font-semibold break-words">
            {data && data.firstName} {data && data.lastName}
          </p>
          <p className="text-sm capitalize">
            {data && data?.role} at <span className="italic">{data && data.organization}</span>
          </p>
          <a className="hover:text-primary" href={`mailto:${data && data.email}`}>
            {data && data.email}
          </a>
          <Button type="primary" className="w-full bg-primary text-secondary rounded-lg">
            Edit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ViewUser;

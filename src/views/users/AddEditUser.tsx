import { Button, Form, Input, Modal, Select } from 'antd';
import { addUser, editUser } from 'appRedux/actions/userAction';
import { useAppDispatch } from 'appRedux/store';
import React, { useEffect } from 'react';
import { UserRoles } from 'types';
import { IAddUser } from 'types/ReduxTypes/user/action';

/**
 * @returns {React.FC} - returns Users
 */
const AddEditUser = ({
  addEditModal,
  setAddEditModal,
  data,
  setData,
  isEdit
}: {
  addEditModal?: boolean;
  setAddEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
  data?: any;
  setData?: any;
  isEdit?: boolean;
}) => {
  const dispatch = useAppDispatch();
  /**
   * Handle cancel button click in modal dialog.
   *
   * Simply logs a message to the console and sets `open` to `false`.
   */
  const handleCancel = () => {
    setAddEditModal?.(false);
    form.resetFields();
  };
  /**
   * Called when the form is submitted.
   *
   * Logs a success message with the submitted values to the console.
   * @param {Object} values - The values of the form fields.
   */
  const onFinish = (values: IAddUser) => {
    if (isEdit) {
      values.id = data?._id;
      dispatch(editUser(values));
    } else {
      dispatch(addUser(values));
    }
    form.resetFields();
    setAddEditModal?.(false);
  };

  /**
   * Called when the form is not submitted successfully.
   *
   * Logs an error message with the error information to the console.
   * @param {Object} errorInfo - The error information of the form.
   */
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  console.log(data);
  const [form] = Form.useForm();
  useEffect(() => {
    if (data && isEdit) {
      form.setFieldsValue(data);
    }
  }, [data]);

  return (
    <Modal
      open={addEditModal}
      centered
      closable={false}
      footer={null}
      //   onOk={handleOk}
      //   confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <div className="space-y-4 rounded-xl">
        <p className="text-center text-lg font-semibold">
          {isEdit ? 'Edit User Details' : 'Add User'}
        </p>
        <Form
          form={form}
          name="user"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please enter full name!' }]}>
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please enter full name!' }]}>
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter email', type: 'email' }]}>
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Please select user role' }]}>
              <Select
                placeholder="Select Role"
                options={[
                  {
                    value: UserRoles.Auditor,
                    label: 'Complience Partner'
                  },
                  {
                    value: UserRoles.Client,
                    label: 'Employee'
                  },
                  {
                    value: UserRoles.ServiceProvider,
                    label: 'Service Provider'
                  }
                ]}
              />
            </Form.Item>
          </div>
          <div className="sm:flex w-full justify-end items-center gap-4 mt-4">
            <Form.Item>
              <Button
                type="ghost"
                htmlType="reset"
                className="rounded-md w-full"
                onClick={() => {
                  handleCancel();
                  //   setAddEditModal?.(false);
                }}>
                Cancel
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="rounded-md w-full">
                {isEdit ? 'Update User' : 'Add User'}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddEditUser;

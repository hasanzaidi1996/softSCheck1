import { Button, Form, Input, Select, Switch } from 'antd';
import { generateOTP, removeOTP } from 'appRedux/actions/authAction';
import { AuthSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UserRoles } from 'types';
import { OTPData } from './types';
import OTPModal from './OTPModal';

/**
 * This is the main function for the SettingsForm page.
 *
 * @returns The JSX to be rendered on the page.
 */
const SettingsForm = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [otpData, setOTPData] = useState({ url: '', secret: '' });
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(AuthSelector);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  console.log(user);
  /**
   * Called when the form is submitted.
   *
   * Logs a success message with the submitted values to the console.
   * @param {Object} values - The values of the form fields.
   */
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  /**
   * OTP change call of function
   *
   * @param {boolean} checked status of otp
   * @param {Event} event event of call
   */
  const otpChange = async (checked: boolean) => {
    setLoading(true);
    if (checked) {
      const data: OTPData = await dispatch(generateOTP()).unwrap();

      if (data) {
        setOTPData(data);
        setModalVisibility(true);
      }
    } else {
      await dispatch(removeOTP());
    }
    setLoading(false);
  };

  return (
    <div className="container bg-tertiary rounded-lg p-6">
      <OTPModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        data={otpData}
      />
      <Form
        form={form}
        name="SettingsForm"
        onFinish={onFinish}
        scrollToFirstError
        layout="vertical"
        initialValues={{
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          organization: user?.organization,
          role: user?.role,
          address: user?.address
        }}>
        <div className="grid sm:grid-cols-2 gap-x-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: 'Please input your first name!'
              }
            ]}
            hasFeedback>
            <Input placeholder="Enter your first name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: 'Please input your last name!'
              }
            ]}
            hasFeedback>
            <Input placeholder="Enter your last name" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="organization"
            label="Organization"
            rules={[
              {
                required: true,
                message: 'Please input your organization!'
              }
            ]}
            hasFeedback>
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input your address!'
              }
            ]}
            hasFeedback>
            <Input type="textarea" placeholder="Enter your address" />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: 'Please select your role!' }]}>
            <Select
              disabled
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
          <Form.Item name="otp" label="OTP">
            <Switch
              checkedChildren={'enabled'}
              unCheckedChildren={'not enabled'}
              defaultChecked={!!user?.totpSecret}
              onChange={otpChange}
              loading={loading}
            />
          </Form.Item>
        </div>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit" className="rounded-md" disabled>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SettingsForm;

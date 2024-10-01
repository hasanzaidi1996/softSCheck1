import { Button, Form, Input } from 'antd';
import { AuthSelector } from 'appRedux/reducers';
import { useSelector } from 'react-redux';

/**
 * This is the main function for the ChangePassword page.
 *
 * @returns The JSX to be rendered on the page.
 */
const ChangePassword = () => {
  const { user } = useSelector(AuthSelector);
  const [form] = Form.useForm();
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

  return (
    <div className="container bg-tertiary rounded-lg p-6">
      <Form
        form={form}
        name="ChangePassword"
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
        <div className="grid sm:grid-cols-1 gap-x-4">
          <Form.Item
            name="oldPassword"
            label="Current Password"
            rules={[
              {
                required: true,
                message: 'Please input your current password!'
              }
            ]}
            hasFeedback>
            <Input.Password placeholder="Current password" />
          </Form.Item>
          <Form.Item
            name="password"
            label="New Password"
            rules={[
              {
                required: true,
                message: 'Please input your new password!'
              }
            ]}
            hasFeedback>
            <Input.Password placeholder="New password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm New Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => {
                return {
                  // eslint-disable-next-line object-shorthand
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error('The two passwords that you entered do not match!')
                    );
                  }
                };
              }
            ]}>
            <Input.Password placeholder="Confirm password" />
          </Form.Item>
        </div>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit" className="rounded-md" disabled>
            Change Password
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePassword;

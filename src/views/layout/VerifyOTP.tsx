import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Input, Result, Form } from 'antd';
import { ResultStatusType } from 'antd/lib/result';
import { verifyOTP } from 'appRedux/actions/authAction';
import { useAppDispatch } from 'appRedux/store';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * Verify otp page component
 *
 * @returns {React.FC} component to render
 */
const VerifyOTP: React.FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState({
    status: 'info',
    title: 'Please Enter your OTP from registered App'
  });

  /**
   * Submite OTP
   *
   * @param {Record<string, string>} values value of fundtion
   *
   */
  const submit = async (values: Record<string, string>) => {
    if (userId) {
      if (await dispatch(verifyOTP({ otp: values.otp, userId: userId })).unwrap()) {
        setStatus({
          status: 'success',
          title: 'OTP has been successfully verified'
        });
      } else {
        setStatus({
          status: 'error',
          title: 'OTP could not be verified'
        });
      }
    }
  };

  return (
    <Result
      status={status.status as ResultStatusType}
      title={<>{status.title}</>}
      extra={
        <Form onFinish={submit}>
          <Form.Item
            name={'otp'}
            id="otp"
            label="OTP Code"
            rules={[
              {
                required: true,
                message: 'OTP is required'
              }
            ]}>
            <Input />
          </Form.Item>

          <Button onClick={() => navigate(-1)} icon={<ArrowLeftOutlined />}>
            Back
          </Button>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form>
      }
    />
  );
};

export default VerifyOTP;

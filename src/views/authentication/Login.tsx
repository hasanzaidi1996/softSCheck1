import React, { useState } from 'react';
import { Row, Col, Typography, Form, Grid } from 'antd';
import { ScalableButton, ScalableInput, ScalableLink } from 'components';
import { NavLink, useNavigate } from 'react-router-dom';
import { InputLength } from 'types';

// REDUX
import { Login as LoginAction } from 'appRedux/actions/authAction';
import { useAppDispatch } from 'appRedux/store';

// types
import { ILoginFormData, ILoginResponseData } from 'types/ReduxTypes/auth';
// import { UserRoles } from 'types';

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

/**
 * This is a Login Component
 *
 * @returns {React.FC} Login Component
 */
const Login: React.FC = () => {
  const screens = useBreakpoint();
  const mdOrUp = Boolean(screens.md);
  const navigate = useNavigate();
  const [btnLoader, setBtnLoader] = useState(false);
  const mdCol = 15;
  const smallCol = 20;
  const dispatch = useAppDispatch();

  // const navigate = useNavigate();

  /**
   * Submit the login form to the server
   *
   * @param {ILoginFormData} formData - Form values
   */
  const submitForm = async (formData: ILoginFormData) => {
    setBtnLoader(true);
    const response = await dispatch(LoginAction(formData));
    const payload = response.payload as ILoginResponseData;
    if (payload.otp && payload.id) {
      // sessionStorage.setItem('email', formData.email);
      navigate(`/otp/${payload.id}`);
    }
    setBtnLoader(Boolean(response.payload));
  };

  return (
    <>
      <Row justify={'center'} align="middle" className="auth-view-container">
        <Col span={mdOrUp ? mdCol : smallCol}>
          <Title level={2} className="auth-title" style={{ marginBottom: '0px' }}>
            LOGIN
          </Title>
          <Text
            type="secondary"
            className={`form-subtitle auth-subtitle ${mdOrUp ? 'auth-subtitle-md-lg' : ''}`}>
            Login to your existing account or{' '}
            <ScalableLink sameline={true} href="/signup" title="Create new" underline={true} />
          </Text>
          <Form onFinish={submitForm}>
            <Text type="secondary" className="form-subtitle">
              Email Address*
            </Text>
            <Form.Item
              id="email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}>
              <ScalableInput
                white={true}
                placeholder="name@domain.com"
                size={'middle'}
                maxLength={InputLength.EMAIL_LENGTH}
              />
            </Form.Item>
            <Text type="secondary" className="form-subtitle">
              Password*
            </Text>
            <Form.Item
              id="password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <ScalableInput
                white={true}
                placeholder="Password"
                type="password"
                autoComplete="off"
                maxLength={InputLength.EMAIL_LENGTH}
              />
            </Form.Item>

            <Form.Item>
              <Row gutter={12} justify={'space-between'} align="bottom">
                <Col span={12}>
                  <NavLink to={'/signup'}>
                    <ScalableButton block> Sign up</ScalableButton>
                  </NavLink>
                </Col>
                <Col span={12}>
                  <ScalableButton
                    loading={btnLoader}
                    disabled={btnLoader}
                    htmlType="submit"
                    type="primary"
                    block>
                    Login
                  </ScalableButton>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {/* )} */}
    </>
  );
};

export default Login;

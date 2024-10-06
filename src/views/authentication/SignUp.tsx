import { Col, Form, Grid, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { InputLength } from 'types';
import { ScalableButton, ScalableInput, ScalableLink } from '../../components';
// redux
import { register as RegisterAction } from 'appRedux/actions/authAction';
import { useAppDispatch } from 'appRedux/store';
import { IRegisterFormData } from 'types/ReduxTypes/auth';

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;
/**
 * This is a Signup Component responsible for registering a user
 *
 * @returns {React.FC} Signup Component
 */
const SignUp: React.FC = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const mdOrUp = Boolean(screens.md);
  const mdCol = 18;
  const smallCol = 20;
  const four = 4;
  const twelve = 12;
  const twentyFour = 24;
  const [btnLoader, setBtnLoader] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  /**
   * Signup submit handler
   *
   * @param {IRegisterFormData} formData - Form values
   */
  const submitForm = async (formData: IRegisterFormData) => {
    setBtnLoader(true);
    if (await dispatch(RegisterAction(formData)).unwrap()) {
      navigate('/');
    }
    setBtnLoader(false);
  };

  const fields = [
    {
      type: 'text',
      id: 'firstName',
      name: 'firstName',
      placeholder: 'First Name',
      maxLength: InputLength.USERNAME_LENGTH
    },
    {
      type: 'text',
      id: 'lastName',
      name: 'lastName',
      placeholder: 'Last Name',
      maxLength: InputLength.USERNAME_LENGTH
    },
    {
      type: 'text',
      id: 'organization',
      name: 'organization',
      placeholder: 'Organization',
      maxLength: InputLength.COMPANY_NAME_LENGTH
    },
    {
      type: 'address',
      id: 'address',
      name: 'address',
      placeholder: 'Address',
      maxLength: InputLength.ADDRESS_LENGTH
    },
    {
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Email',
      maxLength: InputLength.EMAIL_LENGTH
    },
    {
      type: 'password',
      password: true,
      id: 'password',
      name: 'password',
      placeholder: 'Password',
      hasFeedback: true,
      maxLength: InputLength.PASSWORD_LENGTH
    },
    {
      type: 'password',
      password: true,
      id: 'confirmPassword',
      name: 'confirmPassword',
      placeholder: 'Confirm Password',
      dependencies: ['password'],
      hasFeedback: true,
      maxLength: InputLength.PASSWORD_LENGTH
    }
  ];

  return (
    <Row justify={'center'} align={'middle'} className="auth-view-container">
      <Col span={mdOrUp ? mdCol : smallCol}>
        <Title level={2} className="auth-title" style={{ marginBottom: '0px' }}>
          SIGNUP
        </Title>
        <Text
          type="secondary"
          className={`form-subtitle auth-subtitle ${mdOrUp ? 'auth-subtitle-md-lg' : ''}`}>
          Create a new account or&nbsp;
          <ScalableLink sameline={true} href={'/login'} title={'Login'} underline={true} />
          &nbsp;to existing
        </Text>
        <Form onFinish={submitForm}>
          <Row gutter={18}>
            {fields.map((field, index) => {
              return (
                <Col key={index} md={index === four ? twentyFour : twelve} xs={24}>
                  <Text type="secondary" className="form-subtitle">
                    {field.placeholder}
                  </Text>
                  <Form.Item
                    rules={
                      field.name === 'confirmPassword'
                        ? [
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => {
                              return {
                                validator: (_, value) => {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('Passwords do not match!'));
                                }
                              };
                            }
                          ]
                        : [{ required: true, message: `${field.placeholder} is required!` }]
                    }
                    {...field}>
                    <ScalableInput white={true} password={field.password} {...field} />
                  </Form.Item>
                </Col>
              );
            })}
          </Row>
          <Form.Item>
            <Row gutter={18} justify={'space-between'} align="bottom">
              <Col span={12}>
                <NavLink to={'/login'}>
                  <ScalableButton block>Login</ScalableButton>
                </NavLink>
              </Col>
              <Col span={12}>
                <ScalableButton
                  loading={btnLoader}
                  disabled={btnLoader}
                  type="primary"
                  htmlType="submit"
                  block>
                  Sign Up
                </ScalableButton>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;

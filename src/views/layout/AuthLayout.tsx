import { LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import { Col, Grid, Image, Layout, Row, Typography } from 'antd';
import { Loader } from 'components';
import React, { useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import NotFoundLayout from 'views/notFound/NotFound';
import CyMainLogo from '../../assets/icons/LogoWithName.svg';
import Login from '../authentication/Login';
import SignUp from '../authentication/SignUp';
// REDUX
import { useSelector } from 'react-redux';
// import { useAppDispatch } from 'appRedux/store';
import { AuthSelector } from 'appRedux/reducers';
import { branding } from 'config/branding';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserRoles } from 'types';
import VerifyOTP from './VerifyOTP';
// import { Landing } from 'views/landing/Landing';

const { useBreakpoint } = Grid;
const { Content } = Layout;

/**
 * This is a Auth Layout
 *
 * @returns {React.FC} Auth Layout
 */
const AuthLayout: React.FC = () => {
  const { Text, Title } = Typography;
  const screens = useBreakpoint();
  const mdOrUp = Boolean(screens.md);
  // const dispatch = useAppDispatch();
  // const zero = 0;

  // Route protection redirection
  const navigate = useNavigate();

  const { isAuthenticated, role, loading } = useSelector(AuthSelector);

  useEffect(() => {
    (async () => {
      if (isAuthenticated && role) {
        if (role === UserRoles.Client) {
          navigate('/user/essential-eight');
        } else if (role === UserRoles.Mssp) {
          // If not redirect to cached state
          navigate('/mssp/');
        }
      }
    })();
    // Run it only once
  }, [isAuthenticated, role, loading]);

  return loading || isAuthenticated ? (
    <Content className="auth-loading">
      <Loader spinning={true} size={'large'} />
    </Content>
  ) : (
    <Row className="auth-parent-container">
      <Col hidden={!mdOrUp} xs={1} sm={1} md={8} className="auth-container">
        <Row>
          <Col span={24}>
            <Image
              className="auth-logo-image"
              style={{
                width: 400
              }}
              src={CyMainLogo}
              preview={false}
            />
          </Col>

          <Col span={24}>
            <Row>
              <Col span={24} className="auth-salutation">
                <Title>
                  {location.pathname.includes('signup') ? 'Create an Account!' : 'Welcome Back!'}
                </Title>
              </Col>

              <Col span={24} className="auth-tagline-container">
                <Text className="auth-text white">Be Compliant!</Text>
              </Col>
              <Col span={24}>
                <Title level={4}>
                  <ReactTyped
                    strings={[
                      'Patching Application!',
                      'Patching Operating System',
                      'Identifying Policy Issues',
                      'Maintain Secure Infrastructure'
                    ]}
                    loop
                    typeSpeed={20}
                  />
                </Title>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <Text className="auth-text white">{branding.BRAND_CONTACT_EMAIL}</Text>
              </Col>
              <Col span={24} className="contact-icons white">
                <a href={branding.BRAND_TWITTER_LINK} target={'_blank'} rel="noreferrer">
                  <TwitterSquareFilled className="auth-text" />
                </a>
                <a href={branding.BRAND_LINKEDIN_LINK} target={'_blank'} rel="noreferrer">
                  <LinkedinFilled className="auth-text" />
                </a>
              </Col>
              <Col span={24} className="auth-footer">
                <Row>
                  <Col span={24}>
                    <a href={branding.BRAND_PRIVACY_POLICY} target={'_blank'} rel="noreferrer">
                      <Text className="auth-footer-links white">Privacy Policy</Text>
                    </a>
                    <Text className="auth-footer-links white">
                      {'\u00a0\u00a0\u00a0\u00a0'}All Rights Reserved
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={22} sm={22} md={15} className="form-container">
        <Routes>
          {/* <Route path="landing" element={<Landing />} /> */}
          <Route path={'signup'} element={<SignUp />} />
          <Route path={'login'} element={<Login />} />
          <Route path="otp/:userId" element={<VerifyOTP />} />

          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
      </Col>
      <Col hidden={!mdOrUp} span={1} className="right-background-stripe"></Col>
    </Row>
  );
};

export default AuthLayout;

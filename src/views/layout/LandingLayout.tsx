import {
  BarChartOutlined,
  CaretDownFilled,
  LoginOutlined,
  LogoutOutlined,
  PieChartOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Button, Card, Col, Dropdown, Layout, Row, Segmented, Space, Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { logout } from 'appRedux/actions/authAction';
import { AuthSelector } from 'appRedux/reducers';
import store from 'appRedux/store';
import { LogoIcon } from 'assets/icons';
import isAuthorized from 'authorization/RouteAuthorized';
import { CustomMenu, ScalableButton } from 'components';
import React, { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import getItem from 'routing/getMenuItem';
import CyberAttackBar from './components/CyberAttackBar';
import CommonAttackPie from './components/CommonAttackPie';
const { Header, Content } = Layout;
const { Title } = Typography;

interface ILayoutProps {
  children: ReactNode;
}

/**
 * Setup Layout for preview of landing page
 *
 * @param {ILayoutProps} props props for component
 * @returns {React.FC<ILayoutProps>} layout for landing
 */
const LandingLayout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  const location = useLocation();
  const authState = useSelector(AuthSelector);
  const segmentOptions = [
    {
      label: 'Major Attacks',
      value: 0,
      icon: <BarChartOutlined />
    },
    {
      label: 'Common Type',
      value: 1,
      icon: <PieChartOutlined />
    }
  ];
  const [type, setType] = useState(0);

  /**
   * Render chart according to type
   *
   * @param {number} type type chart
   * @returns {React.FC} component to render
   */
  const previewChart = (type: number) => {
    switch (type) {
      case 0:
        return <CyberAttackBar />;
      case 1:
        return <CommonAttackPie />;
      default:
        return <></>;
    }
  };

  /**
   * Account Tab
   *
   * @returns {React.FC} returns tab for account
   */
  const accountMenu = () => {
    const items = [
      getItem(
        <NavLink to={'/user'}>
          <Button icon={<UserOutlined />} block>
            Dashboard
          </Button>
        </NavLink>,
        '0'
      ),
      getItem(
        <Button
          icon={<LogoutOutlined />}
          onClick={() => {
            store.dispatch(logout());
          }}
          block>
          Logout
        </Button>,
        '3'
      )
    ];

    return <CustomMenu defaultSelectedKeys={['-1']} items={items} onClick={(val) => {}} />;
  };

  /**
   * Account Tab
   *
   * @param {any} props - Properties of the component
   * @returns {React.FC} returns tab for account
   */
  const AccountTab = (props: any) => {
    return (
      <>
        <a {...props} className="nav-account-dropdown">
          <UserOutlined className="antd-icon align-center navbar-padding navbar-badge" />
          <CaretDownFilled twoToneColor={'#111c4e'} />
        </a>
      </>
    );
  };

  return (
    <Layout className={`site-layout`}>
      <Header className="site-layout-background">
        <Row className="site-layout-row">
          <Col span={12} className="navbar-left">
            <Title className="align-center navbar-padding" level={4}>
              <Icon component={LogoIcon} /> Connecting Dots ...
            </Title>
          </Col>
          <Col span={12} className="navbar-right">
            {/* {authState.role === UserRoles.Client && <Notification />} */}
            {isAuthorized(location.pathname, authState.user) ? (
              <Dropdown className="align-center navbar-padding" overlay={accountMenu}>
                <AccountTab />
              </Dropdown>
            ) : (
              <Space>
                <NavLink to={'/auth/login'}>
                  <ScalableButton icon={<LoginOutlined />} block>
                    Login
                  </ScalableButton>
                </NavLink>
                <NavLink to={'/auth/signup'}>
                  <ScalableButton icon={<UserAddOutlined />} block type="primary">
                    Register
                  </ScalableButton>
                </NavLink>
              </Space>
            )}
          </Col>
        </Row>
      </Header>
      <Layout hasSider>
        <Layout>
          <Content>{props.children}</Content>
        </Layout>
        <Sider width={'25%'} className="landing-sider">
          <Card
            style={{ height: '100%', borderRight: 0 }}
            extra={
              <Segmented
                options={segmentOptions}
                onChange={(chart) => {
                  setType(chart as number);
                }}
              />
            }>
            {previewChart(type)}
          </Card>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default LandingLayout;

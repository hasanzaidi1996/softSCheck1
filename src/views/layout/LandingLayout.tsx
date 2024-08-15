import {
  CaretDownFilled,
  CaretLeftOutlined,
  CaretRightOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined
} from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Button, Card, Col, Dropdown, Grid, Layout, Row, Space, Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { logout } from 'appRedux/actions/authAction';
import { AuthSelector } from 'appRedux/reducers';
import store from 'appRedux/store';
import { LogoIcon } from 'assets/icons';
import isAuthorized from 'authorization/RouteAuthorized';
import { CustomMenu, ScalableButton } from 'components';
import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import getItem from 'routing/getMenuItem';
import CyberAttackBar from './components/CyberAttackBar';
import { Footer } from 'antd/lib/layout/layout';
const { Header, Content } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

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
  const { md, lg } = useBreakpoint();

  const location = useLocation();
  const authState = useSelector(AuthSelector);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    md ? setCollapsed(false) : setCollapsed(true);
  }, [md]);
  // const segmentOptions = [
  //   {
  //     label: 'Major Attacks',
  //     value: 0,
  //     icon: <BarChartOutlined />
  //   },
  //   {
  //     label: 'Common Type',
  //     value: 1,
  //     icon: <PieChartOutlined />
  //   }
  // ];
  // const [type, setType] = useState(0);

  // /**
  //  * Render chart according to type
  //  *
  //  * @param {number} type type chart
  //  * @returns {React.FC} component to render
  //  */
  // const previewChart = (type: number) => {
  //   switch (type) {
  //     case 0:
  //       return <CyberAttackBar />;
  //     case 1:
  //       return <CommonAttackPie />;
  //     default:
  //       return <></>;
  //   }
  // };

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

  const smExpandedLayoutOpacity = 0.3;
  const mdUpExpandedLayoutOpacity = 1;
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
                <NavLink to={'/'}>
                  <ScalableButton icon={<LoginOutlined />} block>
                    Login
                  </ScalableButton>
                </NavLink>
                <NavLink to={'/signup'}>
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
        <Layout
          style={{
            opacity: !md && !collapsed ? smExpandedLayoutOpacity : mdUpExpandedLayoutOpacity
          }}>
          <Content>{props.children}</Content>
        </Layout>
        <Sider
          width={lg ? '25%' : md ? '45%' : '100%'}
          collapsedWidth={20}
          className="landing-sider"
          collapsed={collapsed}
          breakpoint="lg">
          {collapsed ? (
            <CaretLeftOutlined
              style={{ color: '#fff', fontSize: 20 }}
              onClick={() => {
                setCollapsed(false);
              }}
            />
          ) : (
            <CaretRightOutlined
              style={{ color: '#fff', fontSize: 20 }}
              onClick={() => {
                setCollapsed(true);
              }}
            />
          )}

          {!collapsed && (
            <Card style={{ borderRight: 0 }}>
              <CyberAttackBar />
            </Card>
          )}
        </Sider>
      </Layout>
      <Footer>
        <Card
          title={
            <Title className="align-center navbar-padding" level={4}>
              <Icon component={LogoIcon} /> Connecting Dots ...
            </Title>
          }
          className="card-nobody"
          style={{ padding: '0px', backgroundColor: '#ffd15c' }}
          bodyStyle={{ display: 'none' }}
        />
      </Footer>
    </Layout>
  );
};

export default LandingLayout;

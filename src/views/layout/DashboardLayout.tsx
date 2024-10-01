import {
  CaretDownFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Col, Dropdown, Grid, Image, Layout, Row, Select, Skeleton, Space, Typography } from 'antd';
import { CustomMenu } from 'components';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { UserRoles } from 'types';
import LogoMark from '../../assets/icons/logo-white.svg';
import {
  navAccountMenu,
  siderClientMenu,
  siderClientRoutes,
  siderMsspMenu,
  siderMsspRoutes
} from '../../routing';

// redux
import { getReports } from 'appRedux/actions/reportAction';
import { AuthSelector, ReportSelector } from 'appRedux/reducers';
import { setSelectedId } from 'appRedux/reducers/reportReducer';
import { useAppDispatch } from 'appRedux/store';
import { SidebarSkeleton } from 'components/skeleton';
import { branding } from 'config/branding';
import { useSelector } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

const { useBreakpoint } = Grid;

/**
 * This is a Dashboard Layout Component
 *
 * @returns {React.FC} Auth Layout
 */
const DashboardLayout: React.FC = () => {
  const { md } = useBreakpoint();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const [brand, setBrand] = useState('');
  const [selectedKey, setSelectedKey] = useState('');
  const location = useLocation();

  const unAvailable = -1;

  const authState = useSelector(AuthSelector);

  useEffect(() => {
    md ? setCollapsed(false) : setCollapsed(true);
  }, [md]);

  useEffect(() => {
    let currentWindow = location.pathname;

    /**
     * If not authorized simply redirect to
     * root page
     */
    if (!authState.user) {
      navigate('/');
    }

    if (currentWindow.startsWith('/user/')) {
      /**
       * Donot replace last "/" otherwise
       * it has to be removed from route.path
       * as well
       */
      currentWindow = currentWindow.replace('/user', '');
    }

    if (currentWindow.startsWith('/mssp/')) {
      /**
       * Donot replace last "/" otherwise
       * it has to be removed from route.path
       * as well
       */
      currentWindow = currentWindow.replace('/mssp', '');
    }

    /**
     * Configuration of routing and brand name
     */

    let brandFound = false;

    if (authState.role === UserRoles.Client) {
      let label = '';
      siderClientRoutes.forEach((route, index) => {
        const path = route.path;
        if (currentWindow.indexOf(path) !== unAvailable) {
          setSelectedKey(index.toString());
          label += `${route.label} `;
          brandFound = true;
        }
      });

      if (brandFound && label) {
        setBrand(label);
      }
    } else if (authState.role === UserRoles.Mssp) {
      let label = '';
      siderMsspRoutes.forEach((route, index) => {
        const path = route.path;
        if (currentWindow.indexOf(path) !== unAvailable) {
          setSelectedKey(index.toString());
          label += `${route.label} `;
          brandFound = true;
        }
      });

      if (brandFound && label) {
        setBrand(label);
      }
    }

    if (!brandFound) {
      // setBrand('Reports');
      setSelectedKey('0');
    }
  }, [location.pathname]);

  /**
   * Method to toggle the visibility of the sider
   */
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  /**
   * Method to close sidebar on small screen when
   * clicked anywhere in layout
   *
   */
  const handleLayoutClick = () => {
    if (!md && !collapsed) {
      toggle();
    }
  };

  /**
   * Account Tab
   *
   * @returns {React.FC} returns tab for account
   */
  const accountMenu = () => {
    return <CustomMenu defaultSelectedKeys={['-1']} items={navAccountMenu()} />;
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
        {!authState.user ? (
          <Skeleton.Input active={true} className="nav-account-dropdown" size="small" />
        ) : (
          <a
            {...props}
            className="nav-account-dropdown capitalize flex items-center gap-1 text-nowrap">
            <UserOutlined className="antd-icon align-center navbar-padding navbar-badge" />
            {md ? `${authState.user?.firstName || ''} ${authState.user?.lastName}` || '' : ''}{' '}
            <CaretDownFilled twoToneColor={'#111c4e'} />
          </a>
        )}
      </>
    );
  };

  const { reports, reportsLoading, selectedReportId } = useSelector(ReportSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authState.role === UserRoles.Client) {
      if (!reports && reportsLoading) {
        dispatch(getReports());
      }
    }
  }, [reports, reportsLoading]);

  const items =
    reports?.map((report) => {
      return {
        label: report.name,
        value: report._id
      };
    }) || [];

  const smallScreenWidth = 0;
  const mdUpScreenWidth = 80;
  const smExpandedLayoutOpacity = 0.3;
  const mdUpExpandedLayoutOpacity = 1;
  return (
    <>
      <Layout hasSider>
        <Sider
          className="sider scrollbar-primary"
          breakpoint="lg"
          trigger={null}
          collapsible
          collapsedWidth={md ? mdUpScreenWidth : smallScreenWidth}
          width={220}
          collapsed={collapsed}>
          {!collapsed ? (
            <div
              className="logo"
              onClick={() => {
                // if (authState.user?._id) {
                //   return navigate('/user');
                // }
                return navigate('/');
              }}>
              <div className="flex items-center gap-2">
                <Image
                  src={LogoMark}
                  preview={false}
                  height={branding.BRAND_LOGO_NAVBAR_HEIGHT}
                  width={branding.BRAND_LOGO_NAVBAR_WIDTH}
                />
                <Text style={{ fontSize: 20, color: '#ffffff' }}>{branding.BRAND_NAME}</Text>
              </div>
            </div>
          ) : (
            <div className="logo logo-collapsed">
              <Image
                src={LogoMark}
                preview={false}
                height={47}
                width={38}
                onClick={() => {
                  return navigate('/user');
                }}
              />
            </div>
          )}
          <SidebarSkeleton count={10} loading={false}>
            <CustomMenu
              className="sider-menu sidebar-link"
              selectedKeys={[selectedKey]}
              onSelect={(e) => {
                md ? setCollapsed(false) : setCollapsed(true);
              }}
              mode="inline"
              items={authState.role === UserRoles.Mssp ? siderMsspMenu : siderClientMenu}
            />
          </SidebarSkeleton>
        </Sider>
        <Layout
          className={`site-layout ${
            !md ? 'layout-sm' : collapsed ? 'layout-collapsed' : 'layout-expanded'
          }`}
          onClick={handleLayoutClick}
          style={{
            opacity: !md && !collapsed ? smExpandedLayoutOpacity : mdUpExpandedLayoutOpacity
          }}>
          <Header className="site-layout-background">
            <Row className="site-layout-row">
              <Col md={3} lg={5} className="navbar-left flex items-center gap-2">
                {collapsed ? (
                  <MenuUnfoldOutlined
                    className="antd-icon align-center navbar-padding"
                    onClick={toggle}
                  />
                ) : (
                  <MenuFoldOutlined
                    className="antd-icon align-center navbar-padding"
                    onClick={toggle}
                  />
                )}
                <h1 className="text-xl font-semibold text-nowrap">{md ? brand : ''}</h1>
              </Col>

              {authState.role === UserRoles.Client && (
                <Col
                  xs={{ span: 12, offset: 0 }}
                  md={{ span: 12, offset: 0 }}
                  lg={{ span: 10, offset: 2 }}>
                  <Typography.Title level={5}>
                    <Space direction="horizontal">
                      {md ? 'Report:' : ''}
                      <Select
                        options={items}
                        onChange={(val) => {
                          dispatch(setSelectedId(val));
                        }}
                        value={selectedReportId}
                        style={{ width: md ? '250px' : '180px' }}
                      />
                    </Space>
                  </Typography.Title>
                </Col>
              )}
              <Col
                md={authState.role === UserRoles.Client ? { span: 2 } : { span: 6, offset: 15 }}
                lg={authState.role === UserRoles.Client ? { span: 6 } : { span: 6, offset: 13 }}
                className="navbar-right">
                {/* {authState.role === UserRoles.Client && <Notification />} */}
                <Dropdown className="align-center navbar-padding" overlay={accountMenu}>
                  <AccountTab />
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Content className="dashboard-layout-content">
            {/* main-container-id is used in tabs component, donot remove! */}
            <div id="main-container-id" className="content-container">
              <Outlet />
            </div>
          </Content>
          <Footer className="dashboard-layout-footer">
            All Rights Reserved. {branding.BRAND_NAME} {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;

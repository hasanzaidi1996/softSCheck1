import { Layout, Image, Typography, Grid, Row, Col, Dropdown, Skeleton } from 'antd';
import LogoMark from '../../assets/icons/logo-white.svg';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  CaretDownFilled
} from '@ant-design/icons';
import { siderClientRoutes, navAccountMenu, siderClientMenu } from '../../routing';
import { CustomMenu } from 'components';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { UserRoles } from 'types';

// redux
import { useSelector } from 'react-redux';
import { AuthSelector } from 'appRedux/reducers';
import { SidebarSkeleton } from 'components/skeleton';
import isAuthorized from 'authorization/RouteAuthorized';
import { branding } from 'config/branding';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const { useBreakpoint } = Grid;

/**
 * This is a Dashboard Layout Component
 *
 * @returns {React.FC} Auth Layout
 */
const DashboardLayout: React.FC = () => {
  const { md } = useBreakpoint();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true); // mobile first approach
  const [brand, setBrand] = useState(''); // mobile first approach
  const [selectedKey, setSelectedKey] = useState(''); // default selected key
  const location = useLocation();
  const zero = 0;
  // const one = 1;
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
    if (!isAuthorized(currentWindow, authState.user)) {
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
    if (!brand && !selectedKey) {
      let brandFound = false;

      if (authState.role === UserRoles.Client) {
        let label = '';
        siderClientRoutes.forEach((route, index) => {
          const path = route.path.split('/:id')[zero];
          if (currentWindow.indexOf(path.replace('/*', '')) !== unAvailable) {
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
        setBrand('Dashboard');
        setSelectedKey('0');
      }
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
          <a {...props} className="nav-account-dropdown">
            <UserOutlined className="antd-icon align-center navbar-padding navbar-badge" />
            {`${authState.user?.firstName || ''} ${authState.user?.lastName}` || ''}{' '}
            <CaretDownFilled twoToneColor={'#111c4e'} />
          </a>
        )}
      </>
    );
  };

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
                if (authState.user?._id) {
                  return navigate('/user');
                }
                return navigate('/');
              }}>
              <Row gutter={[5, 5]}>
                <Col>
                  <Image
                    src={LogoMark}
                    preview={false}
                    height={branding.BRAND_LOGO_NAVBAR_HEIGHT}
                    width={branding.BRAND_LOGO_NAVBAR_WIDTH}
                  />
                </Col>
                <Col>
                  <Text style={{ fontSize: 20, color: '#ffffff' }}>{branding.BRAND_NAME}</Text>
                </Col>
              </Row>
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
              items={siderClientMenu}
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
              <Col span={12} className="navbar-left">
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
                <Title className="align-center navbar-padding" level={4}>
                  {brand}
                </Title>
              </Col>
              <Col span={12} className="navbar-right">
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

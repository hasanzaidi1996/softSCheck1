import { CaretDownFilled, UserOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';
import { Col, Dropdown, Layout, Row, Typography } from 'antd';
import { LogoIcon } from 'assets/icons';
import { CustomMenu } from 'components';
import React, { ReactNode } from 'react';
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
  /**
   * Account Tab
   *
   * @returns {React.FC} returns tab for account
   */
  const accountMenu = () => {
    return (
      <CustomMenu
        defaultSelectedKeys={['-1']}
        items={[
          { key: 1, label: 'Login' },
          { key: 2, label: 'Signup' }
        ]}
      />
    );
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
            <Dropdown className="align-center navbar-padding" overlay={accountMenu}>
              <AccountTab />
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default LandingLayout;

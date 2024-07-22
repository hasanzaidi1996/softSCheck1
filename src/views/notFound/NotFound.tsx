import React from 'react';
import { Row, Typography, Space, Image } from 'antd';
import { ScalableButton } from 'components';
import NotFound from 'assets/img/not-found.gif';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;
/**
 * Dashboard Component
 *
 * @returns {React.FC} Component
 */
const NotFoundLayout = () => {
  const navigate = useNavigate();
  return (
    <Row justify={'center'} align="middle" className="auth-view-container">
      <Space direction="vertical" align="center">
        <Image src={NotFound} preview={false} />
        <Text className="not-found-sub-title">404 - PAGE NOT FOUND</Text>
        <Text className="not-found-description">
          The page you are looking for might have been removed <br />
          has its name changed or is temporarily unavailable
        </Text>
        <ScalableButton
          onClick={() => {
            navigate('/');
          }}
          type="primary">
          GO HOME
        </ScalableButton>
      </Space>
    </Row>
  );
};

export default NotFoundLayout;

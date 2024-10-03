import React, { useState } from 'react';
import { Alert, Button, Col, Image, Modal, Row, Typography } from 'antd';
import { IOTPModal } from './types';
import { EyeOutlined } from '@ant-design/icons';

/**
 *
 * @param {IOTPModal} props
 * @returns {React.FC} component to render
 */
const OTPModal = (props: IOTPModal) => {
  const [preview, setPreview] = useState(false);
  return (
    <Modal
      title={'Add OTP to Authenticator'}
      open={props.modalVisibility}
      afterClose={() => props.setModalVisibility(false)}
      onCancel={() => props.setModalVisibility(false)}
      footer={null}>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Alert
            message="This will only preview once make sure to add it"
            type="warning"
            showIcon
          />
        </Col>
        <Col span={24}>
          <Image src={props.data.url} preview={false} />
        </Col>
        <Col span={24}>
          <Typography.Paragraph>OR use the following Secret Key to register</Typography.Paragraph>
          <Typography.Text strong>
            {' '}
            {preview ? props.data.secret : '************'}{' '}
            <EyeOutlined
              onClick={() => {
                setPreview(!preview);
              }}
            />{' '}
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Button type="primary" onClick={() => props.setModalVisibility(false)}>
            Done
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};

export default OTPModal;

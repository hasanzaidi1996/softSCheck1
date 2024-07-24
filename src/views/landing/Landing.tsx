import { Button, Card, Col, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import LandingPerson from '../../assets/img/Landing-Page-Person.jpg';
import IdentifyProblemImage from '../../assets/img/problem-identification.jpg';
import Investigate from '../../assets/img/analytics-identify.jpg';
import SecureInfrastructure from '../../assets/img/secure.jpg';

import LandingLayout from 'views/layout/LandingLayout';
import TypingAnimation from './components/TypingAnimation';
import { motion } from 'framer-motion';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import CyberAttackBar from './components/CyberAttackBar';
import CommonAttackPie from './components/CommonAttackPie';

const { Title } = Typography;

/**
 * @returns {React.FC} - User Profile Card Component
 */
const Landing: React.FC = () => {
  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <LandingLayout>
      <Card>
        <Row>
          <Col sm={24} md={12} lg={12} xl={12} xxl={12} span={12}>
            <Title color="#ffffff">
              <TypingAnimation
                content={`Digital Transformation
&
Digital Safety...`}
                speed={20}
              />
            </Title>
            <Title level={4}>
              <TypingAnimation
                content={`Experts in Digital transformation & Cyber Security with data-driven intelligence`}
                speed={20}
              />
            </Title>
            <Space>
              <motion.div whileHover={{ scaleY: 1.5 }} whileTap={{ scaleY: 0.9 }}>
                <Button icon={<TwitterOutlined />} />
              </motion.div>
              <motion.div whileHover={{ scaleY: 1.5 }} whileTap={{ scaleY: 0.9 }}>
                <Button icon={<FacebookOutlined />} />
              </motion.div>
              <motion.div whileHover={{ scaleY: 1.5 }} whileTap={{ scaleY: 0.9 }}>
                <Button icon={<InstagramOutlined />} />
              </motion.div>
            </Space>
          </Col>
          <Col sm={24} md={12} lg={12} xl={12} xxl={12} span={12}>
            <Image preview={false} src={LandingPerson} />
          </Col>
        </Row>
      </Card>
      <Card style={{ backgroundColor: 'rgb(218 220 224)' }}>
        <Space
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
          size={100}
          align="center">
          <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
            <Card style={{ width: 400 }} cover={<Image src={Investigate} preview={false} />}>
              <Meta
                title="Easy Preview "
                description="Get Analytics relavant to your device protection"
              />
            </Card>
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
            <Card
              style={{ width: 400 }}
              cover={<Image src={IdentifyProblemImage} preview={false} />}>
              <Meta title="Identify" description="Identify Problems according to Compliance" />
            </Card>
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
            <Card
              style={{ width: 400 }}
              cover={<Image src={SecureInfrastructure} preview={false} />}>
              <Meta title="Mitigate" description="Secure Your Infrastructure, ensuring policies" />
            </Card>
          </motion.div>
        </Space>
      </Card>
      <Row gutter={[10, 10]}>
        <Col sm={24} md={24} lg={12} xl={12}>
          <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
            <CyberAttackBar />
          </motion.div>
        </Col>
        <Col sm={24} md={24} lg={12} xl={12}>
          <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
            <CommonAttackPie />
          </motion.div>
        </Col>
      </Row>
    </LandingLayout>
  );
};

export { Landing };

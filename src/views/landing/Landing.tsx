import { Button, Card, Carousel, Col, Image, Row, Space, Typography } from 'antd';
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

const { Title, Paragraph, Text } = Typography;

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
          <Col xs={24} md={12} lg={12} xl={12} xxl={12} span={12}>
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
          <Col xs={24} md={12} lg={12} xl={12} xxl={12}>
            <Image preview={false} src={LandingPerson} />
          </Col>
        </Row>
      </Card>
      <Card style={{ padding: '80px', backgroundColor: '#ffd15c' }}>
        <Row>
          <Col span={12}>
            <Title>With the Right Advice Great Things Can Happen</Title>
          </Col>
          <Col span={12}>
            <Paragraph>
              <Text strong>Connecting Dots...</Text> we stand at the intersection of innovation and
              reliability, dedicated to driving growth and efficiency for our partners, Join us in
              embracing the future as we leverage our extensive expertise to illuminate new
              possibilities in the ever-evolving digital landscape
            </Paragraph>
            <Paragraph>
              Contact us today to learn about how we can help your business succeed in the digital
              age!
            </Paragraph>
          </Col>
        </Row>
      </Card>
      <Row gutter={10} justify={'center'}>
        <Col xs={24} md={12} lg={8} xl={6}>
          <Card style={{ backgroundColor: '#f0f2f5' }}>
            <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
              <Carousel autoplay style={{ width: '100%', maxWidth: '400px' }}>
                <Card cover={<Image src={Investigate} preview={false} />}>
                  <Meta
                    title="Easy Preview "
                    description="Get Analytics relavant to your device protection"
                  />
                </Card>
                <Card cover={<Image src={IdentifyProblemImage} preview={false} />}>
                  <Meta title="Identify" description="Identify Problems according to Compliance" />
                </Card>

                <Card cover={<Image src={SecureInfrastructure} preview={false} />}>
                  <Meta
                    title="Mitigate"
                    description="Secure Your Infrastructure, ensuring policies"
                  />
                </Card>
              </Carousel>
            </motion.div>
          </Card>
        </Col>
      </Row>
    </LandingLayout>
  );
};

export { Landing };

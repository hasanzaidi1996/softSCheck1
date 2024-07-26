import { Button, Card, Carousel, Col, Image, Row, Segmented, Space, Typography } from 'antd';
import React, { useState } from 'react';
import LandingPerson from '../../assets/img/Landing-Page-Person.jpg';
import IdentifyProblemImage from '../../assets/img/problem-identification.jpg';
import Investigate from '../../assets/img/analytics-identify.jpg';
import SecureInfrastructure from '../../assets/img/secure.jpg';

import LandingLayout from 'views/layout/LandingLayout';
import TypingAnimation from './components/TypingAnimation';
import { motion } from 'framer-motion';
import {
  BarChartOutlined,
  FacebookOutlined,
  InstagramOutlined,
  PieChartOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import CyberAttackBar from './components/CyberAttackBar';
import CommonAttackPie from './components/CommonAttackPie';

const { Title } = Typography;

/**
 * @returns {React.FC} - User Profile Card Component
 */
const Landing: React.FC = () => {
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
      <Row gutter={[20, 20]}>
        <Col span={8}>
          <Card style={{ backgroundColor: '#f0f2f5' }}>
            {/* <Space
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
          size={100}
          align="center"> */}
            <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
              <Carousel autoplay style={{ width: 400 }}>
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

            {/* </Space> */}
          </Card>
        </Col>

        <Col span={16}>
          <motion.div initial="offscreen" whileInView="onscreen" variants={cardVariants}>
            <Card
              title="Cyber Attacks in Australia"
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
          </motion.div>
        </Col>
      </Row>
    </LandingLayout>
  );
};

export { Landing };

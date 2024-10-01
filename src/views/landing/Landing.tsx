import { Button, Card, Col, Collapse, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import LandingPerson from '../../assets/img/Landing-Page-Person.jpg';
// import IdentifyProblemImage from '../../assets/img/problem-identification.jpg';
// import Investigate from '../../assets/img/analytics-identify.jpg';
// import SecureInfrastructure from '../../assets/img/secure.jpg';

import LandingLayout from 'views/layout/LandingLayout';
import TypingAnimation from './components/TypingAnimation';
import { motion } from 'framer-motion';
import {
  FacebookOutlined,
  InstagramOutlined,
  PlusCircleOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

// import Meta from 'antd/lib/card/Meta';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

/**
 * @returns {React.FC} - User Profile Card Component
 */
const Landing: React.FC = () => {
  // const cardVariants = {
  //   offscreen: {
  //     y: 300
  //   },
  //   onscreen: {
  //     y: 0,
  //     transition: {
  //       type: 'spring',
  //       bounce: 0.4,
  //       duration: 0.8
  //     }
  //   }
  // };

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
      <Card title={<Title level={2}>Our Expertise</Title>}>
        <Row gutter={[20, 20]}>
          <Col span={9}>
            <Card
              className="pattern-circle"
              style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
              <Title level={4} style={{ color: '#fff' }}>
                Digital & Technology consulting
              </Title>
            </Card>
          </Col>
          <Col span={15}>
            <Card
              className="pattern-3"
              style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
              <Title level={4} style={{ color: '#fff' }}>
                Cyber Security
              </Title>
            </Card>
          </Col>
          <Col span={15}>
            <Card
              className="pattern-4"
              style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
              <Title level={4} style={{ color: '#fff' }}>
                Data Analytics & Business Intelligence
              </Title>
            </Card>
          </Col>
          <Col span={9}>
            <Card
              className="pattern-circle"
              style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
              <Title level={4} style={{ color: '#fff' }}>
                Artificial Intelligence
              </Title>
            </Card>
          </Col>
        </Row>
      </Card>
      <Card>
        <Row>
          <Col span={18} offset={4}>
            <Title level={2}>Assess Your Organizations Cyber Security Maturity </Title>
          </Col>
          <Col span={7} offset={11}>
            <NavLink to={'/auth/signup'}>
              <Button type="primary" size="large">
                Get Started
              </Button>
            </NavLink>
          </Col>
        </Row>
      </Card>
      <Card className="services-container">
        <Title level={3}>Cyber Security Made Easy</Title>
        <Row>
          <Col span={20} offset={4}>
            <div className="service service1">
              <Row>
                <Col span={2}>
                  <Title>1</Title>
                </Col>
                <Col span={22}>
                  <Title level={5}>
                    Speedy and Easy Onboarding - Our web app makes managing your business details,
                    compliance and maturity reports and payments a cake walk.
                  </Title>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={18} offset={6}>
            <div className="service service2">
              <Row>
                <Col span={2}>
                  <Title>2</Title>
                </Col>
                <Col span={22}>
                  <Title level={5}>
                    Easy Assessment - We are here to help you at every step and committed to make
                    your organization become cyber secure.
                  </Title>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={16} offset={8}>
            <div className="service service3">
              <Row>
                <Col span={2}>
                  <Title>3</Title>
                </Col>
                <Col span={22}>
                  <Title level={5}>
                    Absolutely secure - We take security very seriously. We&apos;ll never share your
                    contact details or company details with anyone without your permission
                  </Title>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
      <Card className="faq-card">
        <Space
          className="faq-title"
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
          }}
          direction="vertical">
          <Title level={4}>Popular Questions</Title>
          <Title level={2}>Frequently Asked Questions</Title>
        </Space>
        <Row>
          <Col span={12}>
            <Collapse
              style={{ width: '100%' }}
              expandIcon={({ isActive }) => {
                return <PlusCircleOutlined style={{ fontSize: 20 }} rotate={isActive ? 90 : 0} />;
              }}>
              <Panel key={1} header="How does good cyber security Operate" className="faq-panel">
                <p>
                  A good cybersecurity system operates by continuously monitoring and protecting
                  computer systems and networks from unauthorized access, use, disclosure,
                  disruption, modification, or destruction. It also employs a combination of
                  technologies, processes, and practices to safeguard sensitive information and
                  prevent cyber threats
                </p>
              </Panel>
              <Panel key={2} header="How to try this cyber security?" className="faq-panel">
                <p>
                  A good cybersecurity system operates by continuously monitoring and protecting
                  computer systems and networks from unauthorized access, use, disclosure,
                  disruption, modification, or destruction. It also employs a combination of
                  technologies, processes, and practices to safeguard sensitive information and
                  prevent cyber threats
                </p>
              </Panel>
              <Panel
                key={3}
                header="Do Mobile Devices Present Security Risks?"
                className="faq-panel">
                <p>
                  A good cybersecurity system operates by continuously monitoring and protecting
                  computer systems and networks from unauthorized access, use, disclosure,
                  disruption, modification, or destruction. It also employs a combination of
                  technologies, processes, and practices to safeguard sensitive information and
                  prevent cyber threats
                </p>
              </Panel>
            </Collapse>
          </Col>
          <Col span={12}>
            <Collapse
              expandIcon={({ isActive }) => {
                return <PlusCircleOutlined style={{ fontSize: 20 }} rotate={isActive ? 90 : 0} />;
              }}>
              <Panel key={1} header="What is Cyber Security" className="faq-panel">
                <p>
                  A good cybersecurity system operates by continuously monitoring and protecting
                  computer systems and networks from unauthorized access, use, disclosure,
                  disruption, modification, or destruction. It also employs a combination of
                  technologies, processes, and practices to safeguard sensitive information and
                  prevent cyber threats
                </p>
              </Panel>
              <Panel key={2} header="Why Security is So important?" className="faq-panel">
                <p>
                  A good cybersecurity system operates by continuously monitoring and protecting
                  computer systems and networks from unauthorized access, use, disclosure,
                  disruption, modification, or destruction. It also employs a combination of
                  technologies, processes, and practices to safeguard sensitive information and
                  prevent cyber threats
                </p>
              </Panel>
              <Panel key={3} header="How to Pay For This?" className="faq-panel">
                <p>
                  A good cybersecurity system operates by continuously monitoring and protecting
                  computer systems and networks from unauthorized access, use, disclosure,
                  disruption, modification, or destruction. It also employs a combination of
                  technologies, processes, and practices to safeguard sensitive information and
                  prevent cyber threats
                </p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Card>

      <Card
        className="card-nobody"
        title="Our List of Services does not end here. We'll adapt to your particular needs."
        style={{ padding: '-30px' }}
        extra={
          <NavLink to={'/auth/signup'}>
            <Button type="primary" size="large">
              Start Now
            </Button>
          </NavLink>
        }
      />

      {/* <Row gutter={10} justify={'center'}>
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
      </Row> */}
    </LandingLayout>
  );
};

export { Landing };

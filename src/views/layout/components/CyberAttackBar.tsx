import Icon from '@ant-design/icons/lib/components/Icon';
import { Column } from '@ant-design/plots';
import { Col, Row, Tag, Typography } from 'antd';
import { Australia } from 'assets/icons';
import React from 'react';

const { Title } = Typography;

/**
 * Preview Cyber Attack
 *
 * @returns {React.FC} cyber attack render
 */
const CyberAttackBar: React.FC = () => {
  const commonAttacks = [
    {
      attack: 'Data Leak',
      percentage: 15
    },
    {
      attack: 'Data Injection Attacks',
      percentage: 5
    },
    {
      attack: 'Malicious File Upload',
      percentage: 3
    },
    {
      attack: 'Trojen Horse Attacks',
      percentage: 3
    },
    {
      attack: 'Network Attacks',
      percentage: 7
    },
    {
      attack: 'Remote System Access',
      percentage: 28
    },
    {
      attack: 'Directory Access',
      percentage: 18
    },
    {
      attack: 'Social Engineering through Javascript',
      percentage: 16
    },
    {
      attack: 'Phishing',
      percentage: 45
    },
    {
      attack: 'Malware',
      percentage: 30
    },
    {
      attack: 'Password Attacks',
      percentage: 15
    },
    {
      attack: 'Denial of Service (DoS)',
      percentage: 7
    },
    {
      attack: 'Man-in-the-Middle (MitM)',
      percentage: 3
    },
    {
      attack: 'SQL Injection',
      percentage: 2
    },
    {
      attack: 'Cross-Site Scripting (XSS)',
      percentage: 1
    },
    {
      attack: 'Drive-by Downloads',
      percentage: 1
    },
    {
      attack: 'Zero-Day Exploits',
      percentage: 1
    },
    {
      attack: 'Insider Threats',
      percentage: 1
    }
  ];

  const config = {
    data: [
      { label: 'Phishing', count: 50 },
      { label: 'Compromised Credentials', count: 19 },
      { label: 'Brute-Force Attack', count: 12 },
      { label: 'Malware', count: 8 },
      { label: 'Ransomware', count: 3 }
    ],
    xField: 'label',
    yField: 'count',
    seriesField: 'label',
    color: '#242527',
    legends: false
  };
  return (
    <>
      <Title level={4}>
        Criminal Phishing Trips <Icon component={Australia} style={{ fontSize: 20 }} />
      </Title>

      <Column {...config} />
      <Title level={4}>Common Attacks</Title>
      <div className="vertical-marquee">
        <div className="marquee-content">
          {commonAttacks.map((attack, idx) => {
            return (
              <Row key={idx}>
                <Col span={20}>
                  <p>{attack.attack}</p>
                </Col>
                <Col span={4}>
                  <Tag color="#e0ae2f">{attack.percentage}%</Tag>
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CyberAttackBar;

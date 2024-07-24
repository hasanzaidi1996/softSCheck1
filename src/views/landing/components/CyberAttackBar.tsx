import { Bar } from '@ant-design/plots';
import { Card, Space } from 'antd';
import { Australia } from 'assets/icons';
import React from 'react';

/**
 * Preview Cyber Attack
 *
 * @returns {React.FC} cyber attack render
 */
const CyberAttackBar: React.FC = () => {
  const config = {
    data: [
      { label: 'Phishing', count: 50 },
      { label: 'Compromised Credentials', count: 19 },
      { label: 'Brute-Force Attack', count: 12 },
      { label: 'Malware', count: 8 },
      { label: 'Ransomware', count: 3 }
    ],
    xField: 'count',
    yField: 'label',
    seriesField: 'label',
    color: '#b12514',
    legends: false
  };
  return (
    <Card
      title={
        <Space>
          {'Criminal Phishing trips: Cyber Attack in Australia  '}
          <Australia height={20} width={20} />
        </Space>
      }>
      <Bar {...config} />
    </Card>
  );
};

export default CyberAttackBar;

import Icon from '@ant-design/icons/lib/components/Icon';
import { Column } from '@ant-design/plots';
import { Typography } from 'antd';
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
    xField: 'label',
    yField: 'count',
    seriesField: 'label',
    color: '#b12514',
    legends: false
  };
  return (
    <>
      <Typography.Text>
        Criminal Phishing trips <Icon component={Australia} style={{ fontSize: 16 }} />
      </Typography.Text>

      <Column {...config} />
    </>
  );
};

export default CyberAttackBar;

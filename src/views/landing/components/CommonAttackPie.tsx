import Icon from '@ant-design/icons/lib/components/Icon';
import { Pie } from '@ant-design/plots';
import { Typography } from 'antd';
import { Australia } from 'assets/icons';

/**
 *
 * @returns {React.FC} component to render
 */
const CommonAttackPie = () => {
  const data = [
    {
      type: 'RCE/RFI',
      value: 28
    },
    {
      type: 'Path Traversal',
      value: 18
    },
    {
      type: 'XSS',
      value: 16
    },
    {
      type: 'Data Leakage',
      value: 15
    },
    {
      type: 'SQLi',
      value: 5
    },
    {
      type: 'File Upload',
      value: 3
    },
    {
      type: 'Trojen',
      value: 3
    },
    {
      type: 'Protocol Manipulation',
      value: 7
    }
  ];
  const config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}'
    },
    interactions: [
      {
        type: 'element-selected'
      },
      {
        type: 'element-active'
      }
    ]
  };
  return (
    <>
      <Typography.Text>
        Common Attacks <Icon component={Australia} style={{ fontSize: 16 }} />
      </Typography.Text>
      <Pie {...config} />
    </>
  );
};

export default CommonAttackPie;

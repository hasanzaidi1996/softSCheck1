import { Col, Row } from 'antd';
import { BarChart, LineChart, PieChart } from 'charts';
import CustomTable from 'components/table';
import { MaturityTableCoulums } from 'components/tableColumn';
import React from 'react';

/**
 * Componnent to render
 *
 * @returns {React.FC} component to render
 */
const PatchOS: React.FC = () => {
  const patchStatus = [
    {
      type: 'Applied',
      value: 20
    },
    {
      type: 'Not Applied',
      value: 35
    }
  ];

  const complianceStatus = [
    { xAxis: 'January', yAxis: 6 },
    { xAxis: 'February', yAxis: 4 },
    { xAxis: 'March', yAxis: 7 },
    { xAxis: 'April', yAxis: 3 },
    { xAxis: 'May', yAxis: 5 },
    { xAxis: 'June', yAxis: 2 },
    { xAxis: 'July', yAxis: 3 },
    { xAxis: 'August', yAxis: 3 },
    { xAxis: 'September', yAxis: 4 },
    { xAxis: 'October', yAxis: 3 },
    { xAxis: 'November', yAxis: 4 },
    { xAxis: 'December', yAxis: 11 }
  ];

  const operatingSystemByVendor = [
    { label: 'OS3', count: 17 },
    { label: 'OS4', count: 14 },
    { label: 'OS1', count: 11 },
    { label: 'OS5', count: 7 },
    { label: 'OS2', count: 6 }
  ];

  const patchRelease = [
    {
      label: 'Qtr1',
      count: 14
    },
    {
      label: 'Qtr2',
      count: 14
    },
    {
      label: 'Qtr3',
      count: 8
    },
    {
      label: 'Qtr4',
      count: 19
    }
  ];
  const tableData = [
    {
      _id: '1',
      maturityLevel: 'Level 0',
      implementationStatus: 'Not Implemented',
      defensiveActions:
        'Establish a baseline inventory of all operating systems and their versions',
      offensiveActions: 'Implement basic scanning tools to identify mising patches',
      integratedServices:
        'Provide basic training on the importance of regular OS patching and its imact on security'
    },
    {
      _id: '2',
      maturityLevel: 'Level 1',
      implementationStatus: 'Partially Implemented',
      defensiveActions:
        'Schedule regular path updates and ensure all systems are patched within a reasonable timeline',
      offensiveActions: 'Conduct initial vulnerability assessments to identify unpatched systems',
      integratedServices:
        'Developed a process for tracking and managing patches, including testing and deployment'
    },
    {
      _id: '3',
      maturityLevel: 'Level 2',
      implementationStatus: 'Mostly Implemented',
      defensiveActions:
        'Implement automated patch Management Solutions to streamline the patching process',
      offensiveActions:
        'Perform regular penetration testing to verify patch effectiveness and identify new vulnerability',
      integratedServices:
        'Integrate patch management with configuration management and monitoring systems for real time compliance'
    },
    {
      _id: '4',
      maturityLevel: 'Level 3',
      implementationStatus: 'Fully Implemented',
      defensiveActions:
        'Continuously monitor and evaluate path status using advance analytics and AI',
      offensiveActions:
        'Conduct advanced red teaming exercises to actively exploit unpatched vulnerabilities',
      integratedServices:
        'Incorporate patch management into the overall incident response and disaster recovery plans'
    }
  ];
  const maturityCount = [
    {
      label: 'Level 0',
      count: 11
    },
    {
      label: 'Level 1',
      count: 11
    },
    {
      label: 'Level 2',
      count: 11
    },
    {
      label: 'Level 3',
      count: 22
    }
  ];
  const containerStyle = {
    height: '100%',
    width: '100%',
    padding: '24px',
    background: '#fff',
    borderRadius: '10px'
  };
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div style={containerStyle}>
            <CustomTable
              dataSource={tableData}
              // search={search}
              columns={MaturityTableCoulums()}
              loading={false}
              pagination={false}
            />
          </div>
        </Col>
        <Col span={24}>
          <BarChart
            palatte="cubehelixDefault"
            loading={false}
            title="Count of Maturity Level"
            data={maturityCount}
          />
        </Col>

        <Col lg={12} span={24}>
          <BarChart
            palatte="inferno"
            loading={false}
            title="Operating System By Vendor"
            data={operatingSystemByVendor}
          />
        </Col>
        <Col lg={12} span={24}>
          <BarChart
            palatte="cividis"
            loading={false}
            colorField="count"
            title="Count of Date of Patch Release"
            data={patchRelease}
          />
        </Col>
        <Col lg={12} span={24}>
          <PieChart loading={false} palatte="set1" title="Patch Status" data={patchStatus} />
        </Col>
        <Col lg={12} span={24}>
          <LineChart
            loading={false}
            palatte="cubehelixDefault"
            title="Compliance Status Per Meonth"
            data={complianceStatus}
          />
        </Col>
      </Row>
    </>
  );
};

export default PatchOS;

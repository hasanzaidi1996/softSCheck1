import { Col, Row } from 'antd';
import React from 'react';
import ComplianceStatus from './complianceStatusGraph';
import TestResultCountGraph from './countOfTestResultGraph';
import MaturityLevelByTime from './maturityLevelByTime';
import PatchStatusGraph from './patchStatusGraph';

/**
 *
 * @returns {React.FC}
 */
const PatchApplication: React.FC = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col xs={24} sm={24} md={24} lg={12}>
        <PatchStatusGraph />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <TestResultCountGraph />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <MaturityLevelByTime />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <ComplianceStatus />
      </Col>
    </Row>
  );
};

export default PatchApplication;

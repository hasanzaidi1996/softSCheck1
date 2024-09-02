import { Col, Row } from 'antd';
import {
  getCriticalityCount,
  getMaturityLevel,
  getReports,
  getWhitelistedCount
} from 'appRedux/actions/reportAction';
import { ReportSelector } from 'appRedux/reducers';
import { useAppDispatch } from 'appRedux/store';
import { BarChart, PieChart } from 'charts';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ComplianceCount } from './complianceCount/ComplianceCount';

/**
 *
 * @returns {React.FC}
 */
const AppWhiteListing: React.FC = () => {
  // const { search } = useLocation();

  // const query = new URLSearchParams(search);
  const [loading, setLoading] = useState(false);
  const {
    criticalityCount,
    criticalityCountLoading,
    whitelistedCount,
    whitelistedCountLoading,
    reports,
    reportsLoading,
    maturityLevel,
    maturityLevelLoading,
    selectedReportId
  } = useSelector(ReportSelector);
  const dispatch = useAppDispatch();

  /**
   * Format data for whitelisting and
   * criticality count
   */
  const criticalityData =
    criticalityCount?.map((data) => {
      return {
        type: data._id,
        value: data.count
      };
    }) || [];

  const whitelistData =
    whitelistedCount?.map((data) => {
      return {
        type: data._id,
        value: data.count
      };
    }) || [];

  const maturityData =
    maturityLevel?.map((data) => {
      return {
        label: `Level ${data._id}`,
        count: data.count
      };
    }) || [];

  /**
   * When Id is changed fetch new reports
   */
  useEffect(() => {
    (async () => {
      if (selectedReportId) {
        setLoading(true);
        await dispatch(getCriticalityCount(selectedReportId));
        await dispatch(getWhitelistedCount(selectedReportId));
        await dispatch(getMaturityLevel(selectedReportId));
        setLoading(false);
      }
    })();
  }, [selectedReportId]);

  /**
   * If data does not exist and id exists then fetch
   * data for charts
   */
  useEffect(() => {
    if (selectedReportId && !criticalityCount && criticalityCountLoading) {
      dispatch(getCriticalityCount(selectedReportId));
    }
  }, [criticalityCount, criticalityCountLoading]);

  useEffect(() => {
    if (selectedReportId && !whitelistedCount && whitelistedCountLoading) {
      dispatch(getWhitelistedCount(selectedReportId));
    }
  }, [whitelistedCount, whitelistedCountLoading]);

  useEffect(() => {
    if (selectedReportId && !maturityLevel && maturityLevelLoading) {
      dispatch(getMaturityLevel(selectedReportId));
    }
  }, [maturityLevel, maturityLevelLoading]);

  useEffect(() => {
    if (!reports && reportsLoading) {
      dispatch(getReports());
    }
  }, [reports, reportsLoading]);
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <PieChart
            data={whitelistData}
            title={'Application by whitelisting status'}
            palatte={'puOr'}
            loading={loading}
          />
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <PieChart
            data={criticalityData}
            title={'Criticality Count'}
            palatte={'dark2'}
            loading={loading}
          />
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <BarChart
            data={maturityData}
            title={'Maturity Level By App Count'}
            palatte="set1"
            loading={loading}
          />
        </Col>
        <Col sm={24} md={24} lg={12} xl={12} xxl={12}>
          <ComplianceCount loading={loading} reportId={selectedReportId || undefined} />
        </Col>
      </Row>
    </>
  );
};

export default AppWhiteListing;
